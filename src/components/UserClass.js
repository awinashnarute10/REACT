import React from "react";

class UserClass extends React.Component {
  

    constructor(props){ // props are passes to constructor in which its initalized by super that initializes it in React.component class
        super(props);
        this.state = {   // initalizing and declaring state variables in class component 
          count: 0
        };
    }

    render() {
       const {name, location, contact} = this.props;
        return(
            <div className="user-card">
           <h2>Name:{name}</h2>
           <h2>Count: {this.state.count}</h2>  {/** using state variable*/}
           <h3>Location:{location}</h3>
           <h4>Contact: {contact}</h4>
        </div>
        );
    };
}

export default UserClass;