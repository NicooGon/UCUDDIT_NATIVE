import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity, Text, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createPost } from '../../axios/AxiosPost';

export default function SubmitPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigation = useNavigation();

    const handlePost = async () => {
        if (title.trim() === '' || content.trim() === '') {
            Alert.alert('Title and content are required!');
            return;
        }

        const postData = {
            user: { auth0id: "google-oauth2|101483569146996195106" },
            title: title,
            content: content,
        };

        await createPost(postData);
        Alert.alert('Your post has been created successfully!');
        setTimeout(() => navigation.navigate("MainScreen"), 3000);
    };

    const closeInput = () => {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={closeInput}>
            <View className="flex-1 justify-center items-center bg-black p-4">
                <Text className="font-bold text-3xl text-white text-center mb-8">
                    Create a Post
                </Text>

                <View className="w-full max-w-lg">
                    <TextInput
                        className="w-full text-xl rounded-2xl bg-gray-600 p-3 mb-5 text-white"
                        placeholder="Put a title!"
                        maxLength={50}
                        multiline
                        placeholderTextColor="white"
                        onChangeText={setTitle}
                        value={title}
                    />

                    <TextInput
                        className="w-full text-xl rounded-2xl bg-gray-600 p-3 mb-5 text-white"
                        placeholder="Whatever you want!"
                        maxLength={600}
                        multiline
                        placeholderTextColor="white"
                        onChangeText={setContent}
                        value={content}
                    />

                    <View className="flex items-end mt-1">
                        <TouchableOpacity
                            className="bg-blue-500 w-44 rounded-3xl p-3"
                            onPress={handlePost}
                        >
                            <Text className="text-white text-center text-xl ">Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
