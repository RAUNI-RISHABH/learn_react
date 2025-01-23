// named import
import { CDN_URL } from "../utilities/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    locality,
  } = resData?.info || {};
  // console.log(props);
  return (
    <div className="flex justify-center mb-5 w-72">
      <div className="restaurant-card bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="image-container">
          <img
            className="w-full h-48 object-cover"
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="w-full text-lg flex z-10 absolute bottom-2 left-1 text-white py-1 rounded justify-center items-center">
            <div className="pr-2">
              {aggregatedDiscountInfoV3
                ? aggregatedDiscountInfoV3.header + " "
                : ""}
            </div>
            <div>
              {aggregatedDiscountInfoV3
                ? aggregatedDiscountInfoV3.subHeader
                : ""}
            </div>
          </div>
        </div>
        <div className="text-wrap text-lg font-semibold p-2 truncate">
          {name}
        </div>
        <div className="info-container p-2">
          <div className="info-row flex justify-between items-center mb-2">
            <div className="rating flex items-center">
              <span className="rating-star text-yellow-500">
                <i className="bi bi-star-fill star"></i>
              </span>
              <span className="review-count ml-1 text-sm">{avgRating}</span>
            </div>
            <div className="delivery-info text-sm text-gray-500">
              <i className="bi bi-dot"></i> {sla?.slaString}
            </div>
          </div>
          <div className="flex flex-wrap text-sm text-gray-700 mb-2">
            <div className="truncate">{cuisines.join(", ")}</div>
          </div>
          <p className="text-sm text-gray-500">{locality}</p>
        </div>
      </div>
    </div>
  );
};


// higher order component
// it take RestaurantCard as input and reuturn restaurantCardPromoted card instead

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute z-10 top-0 left-0 bg-teal-400 text-white px-2 py-1 text-xs font-bold">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
