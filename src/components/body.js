import { useState , useEffect } from "react";
import {restaurantList} from "../constants";
import RestaurantCard from "./restaurantcard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import RestaurantMenu from "./restaurantMenu";
import useOnline from "../utils/useOnline";
//restaurant word doubt in filterdata function and restaurant cards.

import { filterdata } from "../utils/helper";
 


const Body =()=>{
    const [allRestaurants, setAllRestaurants] = useState([])
    const [searchText , setSearchText]=useState("");
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);

    useEffect( ()=>{
        //API call. called once after initial render.
        getRestaurants();

    }, []);
   

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //Optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        
    }
    const isOnline =useOnline();
    if(!isOnline){
        return <h1> Offline , please check your internet connection</h1>
    }

    console.log("render");
    // not render component(Early return)
    if(!allRestaurants)return null;
    //if(filteredRestaurants?.length ===0)
    //return<h1>No restaurant match your filter</h1>;

    return allRestaurants?.length ===0 ? (
        <Shimmer/>
    ): (

<><div className="search-container p-5 bg-purple-50 my-5">
    <input
    type="text"
    className = "search-input"
    placeholder="Search"
    value = {searchText}
    onChange = {(e)=>{
    setSearchText(e.target.value);
   
    }}
/>
<button 
className="search-btn" 
onClick={()=>{
    const data = filterdata(searchText , allRestaurants);
    setFilteredRestaurants(data);
}}
>
Search</button>
</div>
    <div className="restaurant-list">
    { 
    filteredRestaurants.map((abcd)=>{
      return(
      <Link
      to={"/restaurant/"+ abcd.data.id}
      key ={abcd.data.id}
      >
      <RestaurantCard {...abcd.data} key={abcd.data.id} />
      </Link>  )
})}
    </div>
</>   
    );
    };
    export default Body;