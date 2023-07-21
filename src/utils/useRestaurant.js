import React from 'react';
import { useEffect,useState } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (params) => {
const [restaurant ,setRestaurant] = useState(null);

useEffect( () => {

    getRestaurantInfo();
},[]);

async function getRestaurantInfo(){
const data = await fetch(
    FETCH_MENU_URL+params.abcxyz+"&submitAction=ENTER/"
);
const json = await data.json();
console.log(json.data);
setRestaurant(json.data);
}
return restaurant;
};

export default useRestaurant;