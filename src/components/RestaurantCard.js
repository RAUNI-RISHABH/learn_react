// named import
import {CDN_URL} from "../utilities/constant"


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, aggregatedDiscountInfoV3, locality } =
      resData?.info;
    // console.log(props);
    return (
      <div className="flex justify-center mb-5 w-72">
        <div className="restaurant-card bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="image-container relative">
            <img className="w-full h-48 object-cover" src={CDN_URL + cloudinaryImageId} />
            <div className="discount-badge absolute bottom-2 left-2 text-white text-xs px-2 py-1 rounded">
              {aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header + ' ' + aggregatedDiscountInfoV3.subHeader : ''}
            </div>
          </div>
          <h3 className="restaurant-name text-wrap text-lg font-semibold p-2 truncate">{name}</h3>
          <div className="info-container p-2">
            <div className="info-row flex justify-between items-center mb-2">
              <div className="rating flex items-center">
                <span className="rating-star text-yellow-500"><i className="bi bi-star-fill star"></i></span>
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

  export default RestaurantCard;