import React,{lazy,Suspense} from "react";
import ReactDOM from  "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import { Outlet } from "react-router-dom";
import Contact from "./components/contact";
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/profile";
import Shimmer from "./components/shimmer";


const Instamart = lazy(()=>import("./components/instamart"));
const About = lazy(()=>import("./components/about"));

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Create nested React Elements



const AppLayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter
([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement:<Error/>,
    children :
  [
  {
    path :"/",
    element:<Body/>,
  },
  {
    path :"/about",
    element : (<Suspense fallback ={<h1>This is loading ...</h1>}>
    <About/>
    </Suspense>),
    children :[{
      path:"profile",
      element : <Profile name={"Swapnil"}/>,
    }]
  },
  {
    path : "/contact",
    element:<Contact/>
  },
  {
    path :"/restaurant/:abcxyz",
    element:<RestaurantMenu/>
},
{
path:"/instamart",
element:
(
<Suspense fallback ={<Shimmer/>}>
<Instamart/>
</Suspense>
)
}
  ]
  }
]);


  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router = {appRouter}/>);
  //<RouterProvider Router = {appRouter}/>