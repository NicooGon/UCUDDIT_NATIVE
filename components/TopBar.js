import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import UcuLogo from './UCU.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function TopBar() {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const saveSearch = (text) => {
        setSearch(text);
    };

    const handleSearchSubmit = () => {
        if (search.trim() !== '') {
            navigation.navigate('PostBySearch', { search: search });
        }
        else {
            navigation.navigate('MainScreen')
        }
    };

    const backToMain = () => {
        navigation.navigate('MainScreen');
    };

    return (
        <View className="flex-col items-center justify-between p-2 border-b mt-6 border-slate-300 w-full">

            <View className="flex-row items-center justify-between w-full">
                <TouchableOpacity onPress={backToMain}>
                    <View className="flex-row items-center">
                        <Image source={UcuLogo} className="w-10 h-12" />
                        <Text className="text-xl font-bold ml-2 text-white">UCUDDIT</Text>
                    </View>
                </TouchableOpacity>

                <View className="flex-1 mx-2 relative ml-5">
                    <TextInput
                        value={search}
                        onChangeText={saveSearch}
                        placeholder="Search posts"
                        placeholderTextColor="white"
                        className="w-full py-3 pl-12 bg-slate-600 rounded-full text-white"
                        onSubmitEditing={handleSearchSubmit}
                    />
                    <TouchableOpacity className="absolute left-4 top-1/4">
                        <Icon name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
