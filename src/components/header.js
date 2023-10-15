import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const loggedInUSer = () => {
  return false;
}


const Title = () => {
  
    return(
      <a href="/"> {/*why this */}
        <img
        className="h-32"
        alt = "logo"
        src = "https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj "
        />
      </a>
    );
    }; 
    
    const Header = ()=> {
     const [title ,setTitle] = useState("FoodVilla");
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

     return(
      <div className="flex justify-between bg-pink-50 shadow-lg ">
        <Title/>
        <h1>{title}</h1>
      {/* <button onClick={()=> setTitle("New food app")}>Change title
        </button> */}
        <div >
          <ul className="flex py-10">
            <Link to={"/"}>
              <li className="px-2">Home</li> 
            </Link>
            <Link to={"/about"}>  {/*syntax similar to anchor tag*/}
            <li className="px-2">About</li>
            </Link>
            <Link to={"/contact"}>
            <li className="px-2">Contact</li>
            </Link>
            <li className="px-2">Cart - {cartItems.length}</li>
            <Link to={"/instamart"}>
            <li className="px-2">Instamart</li>
            </Link>
          </ul>
        </div>
        {user.name}
        {isLoggedIn ? (
          <button onClick ={()=>setIsLoggedIn(false)}>Logout</button>
        ) : ( <button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
      </div>
    );
    };

    export default Header