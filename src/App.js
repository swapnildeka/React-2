import React from "react";
import ReactDOM from  "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/about";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import { Outlet } from "react-router-dom";
import Contact from "./components/contact";
import RestaurantMenu from "./components/restaurantMenu";
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
    element : <About/>,
  },
  {
    path : "/contact",
    element:<Contact/>
  },
  {
    path :"/restaurant/:abcxyz",
    element:<RestaurantMenu/>


  }
  ]
  }
]);


  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router = {appRouter}/>);
  //<RouterProvider Router = {appRouter}/>