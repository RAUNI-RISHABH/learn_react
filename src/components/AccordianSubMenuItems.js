import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import { CDN_URL } from "../utilities/constant";

const AccordianSubMenuItems = ({ itemDetails }) => {
//   console.log("menuDetails", itemDetails);
return (
    <div>
        <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="col-span-2 text-start">
                <div className="">{itemDetails?.name}</div>
                <div className="mb-3">
                    <CurrencyRupeeIcon fontSize="small" />{" "}
                    {itemDetails?.defaultPrice / 100 || "SomeThing went wrong"}
                </div>
                <div className="">
                    {itemDetails?.ratings?.aggregatedRating?.rating ? (
                        <span className="text-green-900">
                            {" "}
                            <StarIcon fontSize="small" />{" "}
                            {itemDetails.ratings.aggregatedRating?.rating} (
                            {itemDetails.ratings.aggregatedRating?.ratingCount}){" "}
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="h-5 leading-5 text-sm line-clamp-2">
                    {itemDetails?.description}
                </div>
            </div>

            <div className="flex flex-col justify-end items-end relative">
                <div className="">
                    <img className="h-[144] w-40 object-cover rounded-md overlap" src={CDN_URL + itemDetails?.imageId} alt={itemDetails?.name} />
                </div>
                <div className="absolute z-100 bottom-0 right-4 mx-auto">
                    <Button variant="contained" className="!bg-white" color="white">
                        Add To Cart
                    </Button>
                </div>
                <div className="text-gray-50 text-sm">
                    Customisable
                </div>
            </div>
        </div>
    </div>
);
};

export default AccordianSubMenuItems;
