import { ScrollView, View } from "react-native";

// Componentes
import Constante from "expo-constants";
import Banner from "./components/banner";
import Header from "./components/header";
import RestaurantVerticalList from "./components/list";
import Restaurants from "./components/restaurants";
import Search from "./components/search";
import Section from "./components/section";
import TrendingFood from "./components/trending/food";

import "../../global.css";

const statusBarHeight = Constante.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      className="bg-gray-100 flex-1"
      // não vai ter scroll na parte Vertical do App
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais")}
        size="text-2xl"
      ></Section>

      <TrendingFood />

      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={() => console.log("Clicou no veja mais")}
        size="text-xl"
      ></Section>

      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log("Clicou no restaurantes")}
        size="text-xl"
      ></Section>

      <RestaurantVerticalList />
    </ScrollView>
  );
}
