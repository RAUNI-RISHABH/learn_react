import { useState } from "react";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantCategoryAccordian from "./RestaurantCategoryAccordian";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  // const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

//   custome hooks
  const restInfo = useRestaurantMenu(resId);

const [showIndex, setShowindex] = useState(0);

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

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;
  console.log("restInfo cards", restInfo?.cards);

  let { cards: recomendedCards } =
    restInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR;

  console.log("total recomended category cards", recomendedCards);

  recomendedCards = recomendedCards.filter((item) =>
    item.card.card?.["@type"].includes("ItemCategory") && item.card.card?.itemCards
  );

  console.log("recomendedCards after filter", recomendedCards);

  console.log("showIndex value", showIndex);
  

  return (
    <div className="">
      <div className="flex flex-col items-center text-center">
        <h1 className="">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        <h2>Menu</h2>
        <div className="w-4/5 mt-5 shadow-lg">

            {/* here we are passing setShowIndex as a prop to RestaurantCategoryAccordian component and 
            then we are calling setShowIndex(index) on click of the AccordionSummary component to set the index of the category which is clicked. 
            This will help us to show the items of only that category which is clicked and hide the items of other categories. */}
          {recomendedCards.map((category, index) => (
            <RestaurantCategoryAccordian
              key={index}
              categoryDetails={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowindex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
