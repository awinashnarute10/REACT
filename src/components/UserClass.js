import React from "react";

class UserClass extends React.Component {
  

    constructor(props){ // props are passes to constructor in which its initalized by super that initializes it in React.component class
        super(props);
    }

    render() {
       const {name} = this.props;
        return(
            <div className="user-card">
           <h2>Name:{name}</h2>
           <h3>Location:</h3>
           <h4>Contact: </h4>
        </div>
        );
    };
}

export default UserClass;