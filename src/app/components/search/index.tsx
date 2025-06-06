import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color={"#64738b"} />
      <TextInput
        placeholder="Procure sua comida..."
        className="w-full bg-transparent flex-1 h-full"
      />
    </View>
  );
}
