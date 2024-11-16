import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { getPosts } from '../axios/AxiosPost';
import { ScrollView} from 'react-native';

export default function MainScreen() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            }
            catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <ScrollView className='flex-col w-full'>

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
