import React, { Component } from "react";  
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// changed the about from functional component to class based component to understand life cycle of class based component

class About extends Component{  //  as we imported Component from react we dont have to write React.Component 
  constructor(props){
    super(props);

    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent did mount")
  }

  render(){

    console.log("Parent rendered")

    return(
          <div>
            <h1>About Us Page </h1>

            {/** this is how you use/ consume context in class based */}
            <UserContext.Consumer>     
              {({loggedInUser}) => (
                <h1>User: {loggedInUser}</h1>
              )}
            </UserContext.Consumer>
            
            <UserClass name="First class" location="Sangli" contact = "N/A"/>
            

          </div>
    );
  }
}
    


export default About;