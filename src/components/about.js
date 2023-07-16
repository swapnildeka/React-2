import { Outlet } from "react-router-dom";
import ProfileClassComponemt from "./ProfileClass";
const About = ()=>{

return(
<div>
    <h1>About us Page </h1>
    <p>{" "} This is Chapter 7</p>
     
    <ProfileClassComponemt name={"SwapnilClass"}/>  {/* this is ClassBased Component  */}
    <Outlet/>    {/*   this is if we use FC , you can call outlet since we specified the element in children or directly call the component here */} 
</div>
);
};
export default About;