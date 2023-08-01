import { Outlet } from "react-router-dom";
import ProfileClassComponemt from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/userContext";

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
    <UserContext.Consumer>
  {(value)=>console.log(value)}

    </UserContext.Consumer>
    <UserContext.Consumer>
  {({user})=> <h4>{user.name} --- {user.email}</h4>}

    </UserContext.Consumer>
    <p>{" "} This is Chapter 7</p>
     
    <ProfileClassComponemt name={"Child 1"}/>
     
      {/* this is ClassBased Component  */}
        {/* <Outlet/>  this is if we use FC , you can call outlet since we specified the element in children or directly call the component here */} 
    </div>

    )
}
}
export default About;