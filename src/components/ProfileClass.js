import React from "react";
class Profile extends React.Component{

    constructor(props) {
        super(props);
        console.log("Child - constructor");
        //create state
        this.state ={
            count:0,
            count2:0,
        };
    }

    componentDidMount(){
        //API call
        console.log("Child - ComponentDidMount");
    }

render(){
    console.log("Child - render");
    return (
        <div>
            <h1> Profile Class Component</h1>
            <h2> Name : {this.props.name}</h2>
            <h2> count : {this.props.count}</h2>
            <button onClick={()=>{
                //We don not mutate state directly
                //We do not do this.state=something
                this.setState(
                    {
                        count :1,
                        count2 :2,
                    });
            }}></button>
        
        
        </div>

    )
}
}
export default Profile;