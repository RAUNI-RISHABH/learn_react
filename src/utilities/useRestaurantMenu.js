import { useEffect, useState } from "react";
import { restaurantMenuBaseURL } from "./constant";

const useRestaurantMenu = (resId) => {

    // fetchdata

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenuData(resId);
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(`${restaurantMenuBaseURL}/listRestaurantMenu/${resId}`);
        const json = await data.json();
        console.log("menu details",json);

        setRestInfo(json.data);
    };

    return restInfo;
}

export default useRestaurantMenu;