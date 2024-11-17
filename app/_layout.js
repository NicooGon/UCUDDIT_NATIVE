import { View } from "react-native";
import TopBar from "../components/TopBar";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <View className="flex-1 bg-black">
            <TopBar />
            <Slot />
        </View>
    );
}
