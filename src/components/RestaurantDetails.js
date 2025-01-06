import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {

    // const [restInfo, setRestInfo] = useState(null);

    const {resId} = useParams();

    const restInfo = useRestaurantMenu(resId);

    // we have transferred the below code to useRestaurantMenu.js to make it clean and reusable
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=${resId}&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER`);
    //     const json = await data.json();
    //     console.log(json);

    //     setRestInfo(json.data);
    // };

    if(restInfo === null) return <Shimmer />;


    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;

    const {itemsCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    return  (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            <h2>Menu</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default RestaurantDetails;