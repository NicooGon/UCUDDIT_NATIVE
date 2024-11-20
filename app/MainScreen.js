import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { getPosts } from '../axios/AxiosPost';
import { FlatList, View, Button, Text } from 'react-native';

export default function MainScreen() {
    const [posts, setPosts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchPosts = async () => {
        try {
            const data = await getPosts();
            setPosts(data);
        }
        catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await fetchPosts();
        setIsRefreshing(false);
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            <FlatList
                data={posts}
                onRefresh={handleRefresh}
                refreshing={isRefreshing}
                keyExtractor={(item) => item.postId.toString()}
                
                renderItem={({ item }) => {
                    const { postId, user, title, content, createdAt, likes = 0 } = item;
                    return (
                        <Post
                            postId={postId}
                            title={title}
                            content={content}
                            createdAt={createdAt}
                            postUser={user}
                            likes={likes}
                        />
                    );
                }}
            />

        </View>
    );
}
