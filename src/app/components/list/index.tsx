import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantsProps } from "../restaurants";
import RestaurantItem from "./item";

export default function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch(
        "https://json-server-dados-2.onrender.com/restaurants"
      );
      const data = await response.json();
      setRestaurants(data);
    }
    getFoods();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
}
