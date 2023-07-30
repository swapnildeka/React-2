import {IMG_CDN_URL} from "../constants";

const RestaurantCard =({
    name,
    cuisines,
    cloudinaryImageId,
    sla,
  })=>{
    return(
      <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-200">
        <img 
        src = { IMG_CDN_URL
         + cloudinaryImageId }
         />
        <h2 className="font-bold text-xl">{name} </h2>
        <h3>{cuisines.join(", ")} </h3>
        <h4>{sla.lastMileTravelString} minutes</h4>
     </div>
    );
  };
  export default RestaurantCard;