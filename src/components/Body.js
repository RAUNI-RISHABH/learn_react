import RestaurantCard from "./RestaurantCard";
import resList from "../utilities/mockData";
import { useState } from "react";

const Body = () => {

    // local state variable - super powerful variable
    const [listOfAllRestaurants, setListOfRestaurant] = useState(resList);
    
    return (
      <div className="body">
        {/* <div className="search">Search</div> */}
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfAllRestaurants.filter(res => res?.info?.avgRating >= 4);
            console.log(filteredList.length);
            
            setListOfRestaurant(filteredList);
        }}>Top Rated Restaurant</button>
        <button className="filter-btn" onClick={() => {
          setListOfRestaurant(resList);
        }}> Get All</button>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

 export default Body;