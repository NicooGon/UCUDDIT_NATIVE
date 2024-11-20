import { View } from "react-native";
import TopBar from "../components/TopBar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <View className="flex-1 bg-black">
            <StatusBar style="light" />
            <Stack screenOptions={{
                headerTitle: '', 
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white', 
            }}>
                <Stack.Screen name='[postId]' />
                <Stack.Screen name='[community]' />
                <Stack.Screen name='[auth0id]' />
                <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
            </Stack>
        </View>
    );
}
