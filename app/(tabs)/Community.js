import { View, Text, TouchableOpacity, Image } from 'react-native';
import UCU from './Images/1579542124909.jpeg';
import Informatics from './Images/1695133555250.jpeg';
import Psychology from './Images/images.jpeg';
import Business from './Images/5254.jpg';
import { useNavigation } from '@react-navigation/native'; 

export default function Community() {
    const navigation = useNavigation();

    const goToGeneral = () => {
        navigation.navigate('PostCommunityScreen', { community: 1 });
    }

    const goToInformatics = () => {
        navigation.navigate('PostCommunityScreen', { community: 2 });
    }

    const goToPsychology = () => {
        navigation.navigate('PostCommunityScreen', { community: 3 });
    }

    const goToBusiness = () => {
        navigation.navigate('PostCommunityScreen', { community: 4 });
    }

    return (
        <View className="flex-1 justify-center bg-black">
            <TouchableOpacity className="justify-center items-center mt-3 p-3" onPress={goToGeneral}>
                <View className="relative w-72 h-24">
                    <Image
                        source={UCU}
                        className="w-full h-full rounded-lg absolute top-0 left-0 right-0 bottom-0"
                    />
                    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center rounded-lg">
                        <Text className="text-lg font-bold text-white" style={{ textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 8 }}>
                            General
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="justify-center items-center mt-3 p-3" onPress={goToInformatics}>
                <View className="relative w-72 h-24">
                    <Image
                        source={Informatics}
                        className="w-full h-full rounded-lg absolute top-0 left-0 right-0 bottom-0"
                    />
                    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center rounded-lg">
                        <Text className="text-lg font-bold text-white" style={{ textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 8 }}>
                            Informatics
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="justify-center items-center mt-3 p-3" onPress={goToPsychology}>
                <View className="relative w-72 h-24">
                    <Image
                        source={Psychology}
                        className="w-full h-full rounded-lg absolute top-0 left-0 right-0 bottom-0"
                    />
                    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center rounded-lg">
                        <Text className="text-lg font-bold text-white" style={{ textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 8 }}>
                            Psychology
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="justify-center items-center mt-3 p-3" onPress={goToBusiness}>
                <View className="relative w-72 h-24">
                    <Image
                        source={Business}
                        className="w-full h-full rounded-lg absolute top-0 left-0 right-0 bottom-0"
                    />
                    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center rounded-lg">
                        <Text className="text-lg font-bold text-white" style={{ textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 8 }}>
                            Business
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );
}
