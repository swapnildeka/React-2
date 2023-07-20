import React from "react";
class Profile extends React.Component{

    constructor(props) {
        super(props);
        console.log("Child - constructor");
        //create state
        this.state ={
            userInfo:{
                name:"Dummy name",
                location:"Dummy Location",

            },
        };
    }

async componentDidMount(){
        //API call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
    }

render(){
    console.log("Child - render" +this.state);
    return (
        <div>
            <h1> Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2> Name : {this.state.userInfo.name}</h2>
            <h2> location : {this.state.userInfo.location}</h2>
            
        
        
        </div>

    )
}
}
export default Profile;