import { useEffect, useState } from "react";
import { restaurantMenuBaseURL, restaurants } from "./constant";

const useRestaurantMenu = (resId) => {

    // fetchdata

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenuData(resId);
    }, []);

    // const fetchMenuData = async () => {
    //     const data = await fetch(`${restaurantMenuBaseURL}/listRestaurantMenu/${resId}`);
    //     const json = await data.json();
    //     console.log("menu details",json);

    //     setRestInfo(json.data);
    // };

 function fetchMenuData(id) {
  if (id === undefined || id === null) return null;
  const cards = restaurants?.data?.data?.cards;
  if (!Array.isArray(cards)) return null;

  for (const card of cards) {
    const restArr =
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (!Array.isArray(restArr)) continue;

    const found = restArr.find((r) => String(r?.info?.id) === String(id));
    if (found)  {
        setRestInfo(found.info ?? found);
        return;
    }
  }

    setRestInfo(null);
};

    return restInfo;
}

export default useRestaurantMenu;