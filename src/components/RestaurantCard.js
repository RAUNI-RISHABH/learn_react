// named import
import {CDN_URL} from "../utilities/constant"


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, aggregatedDiscountInfoV3, locality } =
      resData?.info;
    // console.log(props);
    return (
      // <div className="res-card" style={{ backgroundColor: "#e8e8e8" }}>
      //   <img
      //     className="res-card-img"
      //     alt="food-log"
      //     src={
      //       CDN_URL +
      //       cloudinaryImageId
      //     }
      //   />
      //   <h3>{name}</h3>
      //   <h4>{cuisines.join(", ")}</h4>
      //   <h4>{costForTwo}</h4>
      //   <h4>{avgRating}</h4>
      //   <h4>{sla.deliveryTime} minutes</h4>
      // </div>

<div className="card mb-5 w-60">
    <div className="restaurant-card">
        <div className="image-container">
            <img src={CDN_URL + cloudinaryImageId} />
            <div className="discount-badge">{aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header + ' ' +  aggregatedDiscountInfoV3.subHeader : ''}</div>
        </div>
        <h3 className="restaurant-name text-wrap">{name}</h3>
        <div className="info-container">
            <div className="info-row">
                <div className="rating">
                    <span className="rating-star"><i className="bi bi-star-fill star"></i></span>
                    <span className="review-count">{avgRating}</span>
                </div>
                <div className="delivery-info">
                    <i className="bi bi-dot"></i> {sla?.slaString}
                </div>
            </div>
            <div className="flex flex-wrap">
            <div className="">{cuisines.join(", ")}</div>

            </div>
            <p>{locality}</p>
        </div>
    </div>
</div>

    );
  };

  export default RestaurantCard;