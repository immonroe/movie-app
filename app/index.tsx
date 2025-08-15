import "./global.css"
import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-5xl font-bold text-accent">Welcome!</Text>
            <Link href="/onboarding">Onboarding</Link>
            <Link href="/movie/avengers">Avenger Movie</Link>
        </View>
    )
}
