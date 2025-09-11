import React from "react";

class UserClass extends React.Component {
  

    constructor(props){ // props are passes to constructor in which its initalized by super that initializes it in React.component class
        super(props);

        this.state = {   // initalizing and declaring state variables in class component 
          userInfo: {
            name: "Awinash",
            location: "Sangli",
            avatar_url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          }, 
          userName: ""
        };

        console.log(this.props.name + "Consturctor called")
    }


    async componentDidMount(){  // this is called after render and its used for making api calls as it would be a problem if api is called while rendering 
        console.log(this.props.name+ "did mount called")    // to understand class based component life cycle 

        const data  = await fetch("https://api.github.com/users/awinashnarute10");
        console.log(data);
        const json = await data.json();

        this.setState({
            userInfo: json
        });


        this.timer = setInterval(()=>{   // just to show how cleanup works
            console.log("this is not cleaned")
        }, 1000)

    }

    // called after re rendering when setState is called 
    componentDidUpdate(prevProps, prevState){   // prevState and prevProps are the values of props and states before latest rendering or before latest setState
        console.log(this.props.name+"Did update called")

        if(this.state.userInfo.name !== prevState.userInfo.name){   // sideefects specific to if the name changes 
            console.log("The name has changed and here its sideeffects will be defined")
        }
    }


    // used when compnent is unmounted and to cleanup 
    componentWillUnmount(){
        console.log(this.props.name+" component is unmounted");

        clearInterval(this.timer); // clears /  stops the setInterval

    }

    //function to fetch info from github based on username given
    fetchUser = async () => {
         if(!this.state.userName) return;

         const data = await fetch(`https://api.github.com/users/${this.state.userName}`);
         const json = await data.json();

         if(json.message === "Not Found"){
            alert("user not found!");
            return;
         }

         this.setState({
            userInfo: json
         })
    }

    render() {
         
        console.log(this.props.name+ "render called")
        
        const {name, location, avatar_url} = this.state.userInfo;
        const {contact} = this.props;
       

        return(
            <> {/** two sibling elements should be inside a wrapper*/}
            <div className="user-card-input">
                 <input 
                 type="text"
                 placeholder="enter github username"
                 value={this.state.userName}
                 onChange={(e) => (
                    this.setState({
                        userName: e.target.value
                    })
                 )}
                 ></input>
                 <button onClick={this.fetchUser}>Search</button>
            </div>
            
            <div className="user-card">

                <img src={avatar_url}></img>
           <h2>Name:{name}</h2>
           <h3>Location:{location}</h3>
           <h4>Contact: {contact}</h4>

        </div>
        </>
        );
    };
}

export default UserClass;