import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
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
                }}
            />
            <Tabs.Screen
                name="SubmitPost"
                options={{
                    title: 'Create',
                    tabBarIcon: ({ color }) => (
                        <Icon name="plus" color={color} size={30} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Settings"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={30} />
                    ),
                }}
            />
        </Tabs>
    );
}
