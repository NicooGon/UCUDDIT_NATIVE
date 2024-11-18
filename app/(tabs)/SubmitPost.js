import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity, Text, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { createPost } from '../../axios/AxiosPost';

export default function SubmitPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState('');
    const navigation = useNavigation();

    const handlePost = async () => {
        try {
            if (title.trim() === '') {
                Alert.alert('Title is required!');
                return;
            }
            if (content.trim() === '') {
                Alert.alert('Content is required!');
                return;
            }
            if (currentValue === '') {
                Alert.alert('Community is required!');
                return;
            }

            const postData = {
                user: { auth0id: "google-oauth2|101483569146996195106" },
                title: title,
                content: content,
                community: currentValue,
            };

            await createPost(postData);
            Alert.alert('Your post has been created successfully!');
            setTimeout(() => navigation.navigate("MainScreen"), 3000);
        }
        catch (error) {
            console.error(error);
        }
    };

    const closeInput = () => {
        Keyboard.dismiss();
    };

    const items = [
        { label: 'General', value: '1' },
        { label: 'Informatics', value: '2' },
        { label: 'Psychology', value: '3' },
        { label: 'Business', value: '4' }
    ]

    return (
        <TouchableWithoutFeedback onPress={closeInput}>
            <View className="flex-1 justify-center items-center bg-black p-4">
                <Text className="font-bold text-3xl text-white text-center mb-8">
                    Create a Post
                </Text>

                <View className="w-full mb-5">
                    <DropDownPicker
                        className="bg-gray-600 rounded-2xl"
                        items={items}
                        open={isOpen}
                        setOpen={() => setIsOpen(!isOpen)}
                        value={currentValue}
                        setValue={(val) => setCurrentValue(val)}

                        containerStyle={{
                            height: 50,
                            width: '100%',
                        }}

                        showTickIcon={true}
                        showArrowIcon={true}
                        placeholder="Select a community!"
                        placeholderStyle={{ color: 'white' }}
                        labelStyle={{ color: 'white' }}  
                    />
                </View>

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
                        <Text className="text-white text-center text-xl">Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
