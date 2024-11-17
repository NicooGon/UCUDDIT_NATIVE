import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from "react";
import Post from "../components/Post";
import Comment from "../components/Comment";
import axios from "axios";
import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from "react-native";

export default function UserActivity() {
    const { auth0id } = useLocalSearchParams();
    const [myPosts, setMyPosts] = useState([]);
    const [myComments, setMyComments] = useState([]);
    const [myLikes, setMyLikes] = useState([]);
    const [showPosts, setShowPosts] = useState(true);
    const [showLikes, setShowLikes] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const ipAddress = "192.168.100.105";

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const userResponse = await axios.get(`http://${ipAddress}:8080/userByAuth0id`, { params: { auth0id } });
            setUser(userResponse.data);

            const postsResponse = await axios.get(`http://${ipAddress}:8080/postsByUser`, { params: { auth0id } });
            setMyPosts(postsResponse.data);

            const commentsResponse = await axios.get(`http://${ipAddress}:8080/commentsByUser`, { params: { auth0id } });
            setMyComments(commentsResponse.data);

            const likesResponse = await axios.get(`http://${ipAddress}:8080/likedByUser`, { params: { auth0id, likes: 1 } });
            setMyLikes(likesResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (auth0id) {
            fetchData();
        }
    }, [auth0id]);

    const handleShowPosts = () => {
        setShowPosts(true);
        setShowLikes(false);
        setShowComments(false);
    };

    const handleShowLikes = () => {
        setShowPosts(false);
        setShowLikes(true);
        setShowComments(false);
    };

    const handleShowComments = () => {
        setShowPosts(false);
        setShowLikes(false);
        setShowComments(true);
    };

    return (
        <View className="flex-1 items-center bg-black p-4">
            <View className="flex-row mb-5 items-center">
                <View
                    className="rounded-full border-2 border-white overflow-hidden"
                    style={{ width: 100, height: 100 }}
                >
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                </View>
                <Text className="ml-4 text-white text-lg ">{user?.name}</Text>
            </View>

            <View className="flex-row justify-around w-full mb-4">
                <TouchableOpacity
                    className={`px-4 py-2 rounded-md ${showPosts ? "bg-cyan-400" : "bg-gray-700"}`}
                    onPress={handleShowPosts}
                >
                    <Text className={`text-lg ${showPosts ? "text-black" : "text-white"}`}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={`px-4 py-2 rounded-md ${showLikes ? "bg-cyan-400" : "bg-gray-700"}`}
                    onPress={handleShowLikes}
                >
                    <Text className={`text-lg ${showLikes ? "text-black" : "text-white"}`}>Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={`px-4 py-2 rounded-md ${showComments ? "bg-cyan-400" : "bg-gray-700"}`}
                    onPress={handleShowComments}
                >
                    <Text className={`text-lg ${showComments ? "text-black" : "text-white"}`}>Comments</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="w-full">
                {showPosts && (
                    <View >
                        {myPosts.length === 0 ? (
                            <Text className="text-white">No posts found.</Text>
                        ) : (
                            myPosts.map((post) => (
                                <Post
                                    key={post.postId}
                                    postId={post.postId}
                                    title={post.title}
                                    content={post.content}
                                    createdAt={post.createdAt}
                                    postUser={post.user}
                                    likes={post.likes || 0}
                                />
                            ))
                        )}
                    </View>
                )}

                {showComments && (
                    <View >
                        {myComments.length === 0 ? (
                            <Text className="text-white">No comments found.</Text>
                        ) : (
                            myComments.map((comment) => (
                                <Comment
                                    key={comment.commentId}
                                    commentId={comment.commentId}
                                    content={comment.content}
                                    creationDate={comment.creationDate}
                                    commentUser={comment.user}
                                    postUser={comment.post}
                                />
                            ))
                        )}
                    </View>
                )}

                {showLikes && (
                    <View >
                        {myLikes.length === 0 ? (
                            <Text className="text-white">No liked posts found.</Text>
                        ) : (
                            myLikes.map((post) => (
                                <Post
                                    key={post.postId}
                                    postId={post.postId}
                                    title={post.title}
                                    content={post.content}
                                    createdAt={post.createdAt}
                                    postUser={post.user}
                                    likes={post.likes || 0}
                                />
                            ))
                        )}
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
