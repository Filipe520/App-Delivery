import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import RestaurantItem from "../horizontal";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export default function Restaurants() {
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
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
