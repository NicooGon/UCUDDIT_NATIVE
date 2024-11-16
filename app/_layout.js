import { View } from "react-native";
import { Slot } from "expo-router";
import TopBar from "../components/TopBar";

export default function Layout() {
    return (
        <View>
            <TopBar />
            <Slot />
        </View>
    );
}