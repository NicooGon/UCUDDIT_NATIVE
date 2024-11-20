import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

export default function SettingsScreen() {
    const [user, setUser] = useState(null);
    const ipAddress = "192.168.100.105";

    const fetchData = async () => {
        try {
            const userResponse = await axios.get(`http://${ipAddress}:8080/userNative`);
            setUser(userResponse.data);
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!user) {
        return (
            <View className="flex-1 justify-center items-center bg-black">
                <Text className="text-white">Loading...</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 justify-evenly items-center bg-black p-4">

            <Link href={`/UserActivity/${user.auth0id}`} className="bg-gray-500 px-4 py-2 rounded-2xl">
                <Text className="text-white font-bold text-lg">My Activity</Text>
            </Link>

            <View className="w-20 h-20 rounded-full border border-white overflow-hidden">
                <Image
                    source={{ uri: user.imageUrl }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>

            <View className="w-72 text-center mb-4">
                <View className="items-center">
                    <Text className="text-white text-xl">User: {user.name}</Text>
                </View>

                <View className="bg-white h-0.5 mt-1" />
            </View>

            <View className="w-72 text-center">
                <View className="items-center">
                    <Text className="text-white text-xl">Email: {user.email}</Text>
                </View>
                <View className="bg-white h-0.5 mt-1" />
            </View>
        </View>
    );
}
