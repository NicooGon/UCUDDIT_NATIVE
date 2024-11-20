import { useState } from "react";
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import UcuLogo from "./Images/UCU.png";

export default function TabsLayout() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const saveSearch = (text) => {
        setSearch(text);
    };

    const handleSearchSubmit = () => {
        if (search.trim() !== '') {
            router.push(`/PostBySearch/${search}`);
        }
        else {
            router.push(`(tabs)`);
        }
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                tabBarActiveTintColor: '#65c6f3',
                tabBarInactiveTintColor: 'white',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                    header: () =>
                        <SafeAreaView className="flex-row justify-between items-center p-2 border-b bg-black border-slate-300 w-full">
                            <View className="flex-row items-center ml-4">
                                <Image source={UcuLogo} className="w-10 h-12" />
                                <Text className="text-xl font-bold ml-2 text-white">UCUDDIT</Text>
                            </View>

                            <View className="flex-1 mx-2 relative ml-5">
                                <TextInput
                                    value={search}
                                    onChangeText={saveSearch}
                                    placeholder="Search posts"
                                    placeholderTextColor="white"
                                    className="w-full py-3 pl-12 bg-slate-600 rounded-full text-white"
                                    onSubmitEditing={handleSearchSubmit}
                                />
                                <TouchableOpacity className="absolute left-4 top-2">
                                    <Icon name="search" size={20} color="white" />
                                </TouchableOpacity>
                            </View>

                        </SafeAreaView>
                }}
            />

            <Tabs.Screen
                name="SubmitPost"
                options={{
                    title: 'Create',
                    tabBarIcon: ({ color }) => (
                        <Icon name="plus" color={color} size={30} />
                    ),
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="Community"
                options={{
                    title: 'Communities',
                    tabBarIcon: ({ color }) => (
                        <Icon name="users" color={color} size={30} />
                    ),
                    header: () =>
                        <SafeAreaView className="flex-row justify-between items-center p-2 border-b bg-black border-slate-300 w-full">
                            <View className="flex-row items-center ml-4">
                                <Image source={UcuLogo} className="w-10 h-12" />
                                <Text className="text-xl font-bold ml-2 text-white">UCUDDIT</Text>
                            </View>

                            <View>
                                <Text className="text-xl font-bold mr-4 text-white">Communities</Text>
                            </View>
                        </SafeAreaView>
                }}
            />

            <Tabs.Screen
                name="Settings"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={30} />
                    ),
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
