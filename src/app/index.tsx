import { Text, View } from "react-native";

import "../../global.css";
import { Header } from "./components/header";

export default function Index() {
  return (
    <View className="bg-green-600 w-full h-full flex justify-center items-center">
      <Header />
      <Text className="text-red-600 text-2xl">Teste 123</Text>
    </View>
  );
}
