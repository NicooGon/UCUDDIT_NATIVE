import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import Post from '../components/Post';
import { CreateComment } from '../axios/AxiosComment';
import Comment from '../components/Comment';
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function CommentsScreen() {
    const { postId } = useLocalSearchParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const ipAddress = "10.4.3.38";

    useEffect(() => {
        const fetchPostAndComments = async () => {
            try {
                const postResponse = await axios.get(`http://${ipAddress}:8080/postById`, { params: { postId } });
                setPost(postResponse.data);

                const commentsResponse = await axios.get(`http://${ipAddress}:8080/commentsByPost`, { params: { postId } });
                setComments(commentsResponse.data);
            }
            catch (error) {
                console.error('Error fetching post or comments:', error);
            }
        };

        if (postId) {
            fetchPostAndComments();
        }
    }, [postId]);

    const handleComment = async () => {
        if (comment.trim() === '') {
            alert('Content is required!');
            return;
        }

        const commentData = {
            user: { auth0id: "google-oauth2|101483569146996195106" },
            post: { postId },
            content: comment,
        };

        try {
            await CreateComment(commentData);
            setComment('');
            const response = await axios.get(`http://${ipAddress}:8080/commentsByPost`, { params: { postId } });
            setComments(response.data);
        }
        catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <ScrollView className="flex-col bg-black">

            {post ? (
                <Post
                    postId={post.postId}
                    title={post.title}
                    content={post.content}
                    createdAt={post.createdAt}
                    postUser={post.user}
                    likes={post.likes}
                />
            ) : (
                <Text>Loading post...</Text>
            )}

            <View className="w-full p-2 border border-white rounded-3xl mt-3">

                <TextInput
                    className="text-white w-full ml-1 mr-1 mb-3 text-base"
                    placeholder="Add a comment!"
                    placeholderTextColor="white"
                    maxLength={600}
                    value={comment}
                    onChangeText={setComment}
                    multiline={true}
                />

                <View className="items-end">
                    <TouchableOpacity
                        className="bg-gray-500 rounded-full w-28 p-2 mb-1"
                        onPress={handleComment}
                    >
                        <Text className="text-white text-center">Comment</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {comments.length > 0 ? (
                comments.map((comment) => {
                    const { commentId, user, content, creationDate } = comment;
                    return (
                        <Comment
                            key={commentId}
                            commentId={commentId}
                            content={content}
                            creationDate={creationDate}
                            commentUser={user}
                        />
                    );
                })
            ) : (
                <Text className="text-white text-center mt-5">No comments yet.</Text>
            )}

        </ScrollView>
    );
}
