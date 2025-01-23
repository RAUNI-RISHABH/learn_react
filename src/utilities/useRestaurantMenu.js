import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    // fetchdata

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenuData(resId);
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=${resId}&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);

        setRestInfo(json.data);
    };

    return restInfo;
}

export default useRestaurantMenu;