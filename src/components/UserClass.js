import React from "react";

class UserClass extends React.Component {
  

    constructor(props){ // props are passes to constructor in which its initalized by super that initializes it in React.component class
        super(props);

        this.state = {   // initalizing and declaring state variables in class component 
          count: 0
        };

        console.log(this.props.name + "Consturctor called")
    }


    componentDidMount(){  // this is called after render and its used for making api calls as it would be a problem if api is called while rendering 
        console.log(this.props.name+ "did mount called")    // to understand class based component life cycle 
    }

    render() {
         
        console.log(this.props.name+ "render called")

       const {name, location, contact} = this.props;

       const {count} = this.state; // destructuring state variable

        return(
            <div className="user-card">
           <h2>Name:{name}</h2>
           <h2>Count: {count}</h2>  {/** using state variable*/}

           {/** if count was not destructured then count: this.state.count++ */}
           <button onClick={()=> {
            this.setState({          
                count: count+1    
            });
           }}
           >Count Increase</button>

           <h3>Location:{location}</h3>
           <h4>Contact: {contact}</h4>

        </div>
        );
    };
}

export default UserClass;