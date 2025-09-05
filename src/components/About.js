import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
          <div>
            <h1>About Us Page </h1>
            <User name="Awinash Function" location="Sangli" contact = "N/A"/>
            <UserClass name="Awinash class" location="Sangli" contact = "N/A"/>
          </div>
    );
}

export default About;