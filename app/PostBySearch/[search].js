import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Post from '../../components/Post';
import { getPostsByTitle } from '../../axios/AxiosPost';
import { useLocalSearchParams } from 'expo-router';

export default function PostsBySearch() {
    const { search } = useLocalSearchParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPostsByTitle(search);
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (search) {
            fetchPosts();
        }
    }, [search]);

    return (
        <ScrollView className='flex-col w-full bg-black'>
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
