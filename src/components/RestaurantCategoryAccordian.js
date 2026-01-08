import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordianSubMenuItems from "./AccordianSubMenuItems";

const RestaurantCategoryAccordian = ({ categoryDetails, showItems, setShowIndex }) => {
  console.log("categoryDetails ", categoryDetails);

  const handleAccordionClick = () => {
    console.log("Accordion clicked");
    // this is a function which will update state of restaurantdetails statevariable which was passed as a props
    setShowIndex();
  };

  return (
    <div className="p-2 mt-2">
      <Accordion onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="text-lg !font-bold">
            {categoryDetails.title} ({categoryDetails?.itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categoryDetails?.itemCards.map((foodItem, index) => (
            <AccordianSubMenuItems
              key={index}
              itemDetails={foodItem?.card?.info}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantCategoryAccordian;
