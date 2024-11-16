import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import UcuLogo from './UCU.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TopBar() {
    const [search, setSearch] = useState('');

    const saveSearch = (text) => {
        setSearch(text);
    };

    const handleSearchSubmit = () => {
        if (search.trim() !== '') {
            console.log('Búsqueda:', search);
        } else {
            console.log('No se ingresó ningún texto para buscar.');
        }
    };

    return (
        <View className="flex flex-col items-center justify-between p-2 border-b mt-6 border-gray-400 w-full">

            <View className="flex flex-row items-center justify-between w-full">
                <TouchableOpacity>
                    <View className="flex flex-row items-center">
                        <Image source={UcuLogo} className="w-10 h-12" />
                        <Text className="text-2xl font-bold ml-2 text-white">UCUDDIT</Text>
                    </View>
                </TouchableOpacity>

                <View className="flex-1 mx-2 relative ml-5">
                    <TextInput
                        value={search}
                        onChangeText={saveSearch}
                        placeholder="Search posts"
                        placeholderTextColor="white"
                        className="w-full p-3 pl-12 bg-gray-700 rounded-full text-white"
                        onSubmitEditing={handleSearchSubmit}
                    />
                    <View className="absolute left-4 top-[21%]">
                        <Icon name="search" size={20} color="white" />
                    </View>
                </View>

            </View>
        </View>
    );
}
