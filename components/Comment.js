import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function Comment({ content, commentUser, creationDate, commentId }) {
    const [likeButton, setLikeButton] = useState(false);
    const [dislikeButton, setDislikeButton] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [disLikesCount, setDisLikesCount] = useState(0);

    const ipAddress = "10.4.3.38";
    //ucu 10.4.3.38
    //casa 192.168.100.105

    useEffect(() => {
        getUserLikeForComment();
        getLikesCount();
    }, []);

    const getUserLikeForComment = async () => {
        try {
            const response = await axios.get(`http://${ipAddress}:8080/user/google-oauth2|101483569146996195106/comment/${commentId}/like`);
            const userLike = response.data;
            setLikeButton(userLike === 1);
            setDislikeButton(userLike === -1);
        } 
        catch (error) {
            console.error("Error fetching user like:", error);
        }
    };

    const getLikesCount = async () => {
        try {
            const response = await axios.get(`http://${ipAddress}:8080/comment/${commentId}/likes`);
            setLikesCount(response.data);
            const responseDislikes = await axios.get(`http://${ipAddress}:8080/comment/${commentId}/dislikes`);
            setDisLikesCount(responseDislikes.data);
        } 
        catch (error) {
            console.error("Error fetching likes count:", error);
        }
    };

    const toggleLikeDislike = async (rateValue) => {
        const newRateValue = (likeButton && rateValue === 1) || (dislikeButton && rateValue === -1) ? 0 : rateValue;

        try {
            await axios.post(`http://${ipAddress}:8080/toggle/comment`, null, {
                params: {
                    auth0id: "google-oauth2|101483569146996195106",
                    commentId,
                    rateValue: newRateValue,
                }
            });

            if (newRateValue === 1) {
                setLikeButton(true);
                setDislikeButton(false);
            } 
            else if (newRateValue === -1) {
                setLikeButton(false);
                setDislikeButton(true);
            } 
            else {
                setLikeButton(false);
                setDislikeButton(false);
            }

            getLikesCount();
        } catch (error) {
            console.error("Error toggling like/dislike:", error);
        }

    };

    return (
        <View className="rounded-lg p-4 mt-3 w-full">
            <View className="mt-1 border-b border-white mb-2"></View>

            <View className="flex-row items-center mb-4">
                <Image
                    source={{ uri: commentUser?.imageUrl }}
                    className="w-10 h-10 rounded-full bg-gray-300"
                />
                <View className="ml-3">
                    <Text className="text-white font-bold">{commentUser?.name}</Text>
                    <Text className="text-gray-400 text-xs">{creationDate}</Text>
                </View>
            </View>

            <Text className="text-white text-base">{content}</Text>

            <View className="flex-row items-center mt-4">
                <View className="flex-row items-center bg-gray-800 rounded-2xl">
                    <TouchableOpacity onPress={() => toggleLikeDislike(1)} className="p-2">
                        <Icon name="thumbs-up" size={20} color={likeButton ? "lightblue" : "white"} />
                    </TouchableOpacity>

                    <Text className="text-white text-lg mx-1">{likesCount - disLikesCount}</Text>

                    <TouchableOpacity onPress={() => toggleLikeDislike(-1)} className="p-2">
                        <Icon name="thumbs-down" size={20} color={dislikeButton ? "lightblue" : "white"} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="p-2 ml-4 bg-gray-800 rounded-2xl">
                    <Icon name="comment" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View className="w-100 mt-2 border-b border-white"></View>
        </View>
    );
}
