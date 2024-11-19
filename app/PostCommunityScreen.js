import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Post from '../components/Post';
import axios from 'axios';
import { Text, ScrollView } from 'react-native';

export default function PostCommunityScreen() {
    const [posts, setPosts] = useState([]);
    const { community } = useLocalSearchParams();
    const ipAddress = "192.168.100.105";

    const communityOptions = [
        { label: "General", value: "1" },
        { label: "Informatics", value: "2" },
        { label: "Psychology", value: "3" },
        { label: "Business", value: "4" },
    ];

    let communityLabel = '';
    for (let i = 0; i < communityOptions.length; i++) {
        if (communityOptions[i].value === community) {
            communityLabel = communityOptions[i].label;
            break;
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://${ipAddress}:8080/postsByCommunity`, {
                    params: { community }
                });
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        if (community) {
            fetchPosts();
        }
    }, [community]);

    return (
        <ScrollView className='flex-col w-full bg-black'>
            {communityLabel && <Text>You are in {communityLabel} community</Text>}
            {posts.map(post => {
                const { postId, user, title, content, createdAt, likes = 0 } = post;

                return (

                    <Post
                        key={postId}
                        postId={postId}
                        title={title}
                        content={content}
                        createdAt={createdAt}
                        postUser={user}
                        likes={likes}
                    />
                );
            })}

        </ScrollView>

    );
}
