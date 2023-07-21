import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const params = useParams();
  const restaurant = useRestaurant(params);


return !restaurant ? (
    <Shimmer/> ):(
<div className="menu">
    <div>
   <h1>Restaurant id : {params.abcxyz}</h1>     
    <h2>Name : {restaurant.cards[0]?.card?.card?.info?.name}</h2>
   <img src ={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />  
     <h3>{restaurant.cards[0]?.card?.card?.info?.areaName}</h3>
     <h3>{restaurant.cards[0]?.card?.card?.info?.city}</h3> 
     <h3>{restaurant.cards[0]?.card?.card?.info?.avgRating} stars</h3>   
   </div> 
{/*<div>
    <h1>Menu</h1>
    <ul>
        {Object.values(restaurant?.menu?.items).map((item)=>
        (
         <li key ={item.id}>{item.name}</li>
        ))}
    </ul>
        </div> */}
</div>
);
};
export default RestaurantMenu;

