import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const loggedInUSer = () => {
  return false;
}


const Title = () => {
  
    return(
      <a href="/"> {/*why this */}
        <img
        className="logo"
        alt = "logo"
        src = "https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj "
        />
      </a>
    );
    }; 
    
    const Header = ()=> {
     const [title ,setTitle] = useState("FoodVilla");
    const [isLoggedIn , setIsLoggedIn] = useState(false);

     return(
      <div className="header">
        <Title/>
        <h1>{title}</h1>
        <button onClick={()=> setTitle("New food app")}>Change title
        </button>
        <div className="nav-items">
          <ul>
            <Link to={"/"}>
              <li>Home</li> 
            </Link>
            <Link to={"/about"}>  {/*syntax similar to anchor tag*/}
            <li>About</li>
            </Link>
            <Link to={"/contact"}>
            <li>Contact</li>
            </Link>
            <li>Cart</li>
            <Link to={"/instamart"}>
            <li>Instamart</li>
            </Link>
          </ul>
        </div>
        {isLoggedIn ? (
          <button onClick ={()=>setIsLoggedIn(false)}>Logout</button>
        ) : ( <button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
      </div>
    );
    };

    export default Header