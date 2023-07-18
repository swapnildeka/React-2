import { Outlet } from "react-router-dom";
import ProfileClassComponemt from "./ProfileClass";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);
        console.log("Parent - constructor");
    }

    componentDidMount(){
        //API call
        console.log("Parent - ComponentDidMount");
    }

render(){
    console.log("Parent - render");
    return (
        
        <div>
    <h1>About us Page </h1>
    <p>{" "} This is Chapter 7</p>
     
    <ProfileClassComponemt name={"Child 1"}/>
    <ProfileClassComponemt name={"Child  2"}/> 
      {/* this is ClassBased Component  */}
        {/* <Outlet/>  this is if we use FC , you can call outlet since we specified the element in children or directly call the component here */} 
    </div>

    )
}
}
export default About;