import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
// import resList from "../utilities/mockData";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utilities/useOnlineStatus";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import UserContext from "../utilities/UserContext";
import {restaurantMenuBaseURL, restaurants} from "../utilities/constant";
import axios from "axios";

const Body = () => {
  // local state variable - super powerful variable
  //  always create usestate variable inside a functional component and keep it on the top. dont use it inside function, IF, loops

  // whenever state variable update react triggers a reconciliation cycle(rerender component)
  const [listOfAllRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  let copyOfRestaurants = [];

  // calling higher order components withPromotedLabel this will return a new component which has a added label into it
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  /* useEffect() */
  // as soon as the body(component) renders it will eventually call the useEffect hook it has two arguments first is arrow function second is dependecy array(its not mandatory)
  // if no dependency array is given then useEffect  is called on every render
  // if dependency array is empty is provided then useEffect is called on initial render(just once);
  // if dependency array is given as "listOfAllRestaurants" then it is being called everytime when listOfAllRestaurants is updated.
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
      await fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAsync();

    // this will be called when the component is destroyed
    return () => { console.log("Body component unmounted"); };
  }, []);

  console.log("BODY rendered!");

  const fetchData = async () => {

    console.log("fetching data from url",  `${restaurantMenuBaseURL}/listRestaurants`);

    const json = restaurants;
 

    // const data = await fetch(
    //   `${restaurantMenuBaseURL}/listRestaurants`
    // );
    // const json = data.json();

    console.log("fetched data from api", json);
    let restaurantListFromApi =
      json["data"]["data"]["cards"][1]["card"]["card"]["gridElements"]?.[
        "infoWithStyle"
      ]["restaurants"];
    console.log(json);
    restaurantListFromApi = restaurantListFromApi.map((restaurant, index) => {
      if (index % 2 === 1) {
        return { ...restaurant, info: { ...restaurant.info, promoted: true } };
      }
      return { ...restaurant, info: { ...restaurant.info, promoted: false } };
    });
    console.log(restaurantListFromApi);

    setListOfRestaurant(restaurantListFromApi);
    setfilteredRestaurant(restaurantListFromApi);
    copyOfRestaurants = restaurantListFromApi;
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>It seems you are offline, please connect to internet!!!</h1>;
  }

  const {loggedInuser, setUserName} = useContext(UserContext);

  return listOfAllRestaurants.length === 0 ? (
    <div className="grid grid-cols-4">
      {[...Array(20)].map((x, i) => (
        <Shimmer key={i} />
      ))}
    </div>
  ) : (
    <div className="body pink">
      <div className="grid grid-cols-3 py-5">
        <div className="p-2">
          <Stack direction="row" spacing={1}>
            <Chip
              label="Top Rated Restaurants"
              color="primary"
              onClick={() => {
                const filteredList = listOfAllRestaurants.filter(
                  (res) => res?.info?.avgRating >= 4
                );
                console.log(filteredList.length);

                setListOfRestaurant(filteredList);
              }}
            />
            <Chip
              label="Get All"
              color="primary"
              onClick={() => {
                setListOfRestaurant(copyOfRestaurants);
              }}
            />
          </Stack>

          {/* <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfAllRestaurants.filter(
                (res) => res?.info?.avgRating >= 4
              );
              console.log(filteredList.length);

              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              setListOfRestaurant(copyOfRestaurants);
            }}
          >
            {" "}
            Get All
          </button> */}
        </div>

        <div className="search col-span-4">
          <div className="flex items-center max-w-lg mx-auto">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
            </div>
            <button
              onClick={() => {
                console.log(searchText);
                const filteredList = listOfAllRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredList);
                console.log(
                  "list of all restaurantafter filter",
                  listOfAllRestaurants
                );
              }}
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>

            <div>
              <label>User Name:</label>
              <input className="border border-black p-2" value={loggedInuser} type="text" onChange={(e) => setUserName(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap justify-center mx-2">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {/* if restaurant has promoted data as true then load new RestaurantCardPromoted component */}

            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
