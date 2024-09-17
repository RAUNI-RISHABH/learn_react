// named import
import {CDN_URL} from "../utilities/constant"


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
      resData?.info;
    // console.log(props);
    return (
      <div className="res-card" style={{ backgroundColor: "#e8e8e8" }}>
        <img
          className="res-card-img"
          alt="food-log"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;