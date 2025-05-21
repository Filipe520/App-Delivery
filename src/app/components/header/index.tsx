import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      {/* O Pressable é botão */}
      <Pressable className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col justify-center items-center">
        <Text className="text-center text-sm text-slate-800">Localização</Text>

        <View className="flex-row items-center justify-center gap-2">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Aguas Lindas de Goiás</Text>
        </View>
      </View>

      {/* O Pressable é botão */}
      <Pressable className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
