import { useEffect, useState } from "react";

const User = ({name, location, contact}) => {
   const [count, setCount] = useState(0);   // state varible in functional component

   useEffect(()=>{
    const timer = setInterval(()=>{
    console.log("Not cleaned inside functional compnent")
    },1000)

    return () =>{    // cleanup function in useffect called when unmounting or if the useffect has dependecies and those change then the cleanup function is called before the new useffect is called 
        clearInterval(timer);   
    }
   },[])

    return (
        <div className="user-card">
           <h2>Name:{name}</h2>
           <h2>Count: {count}</h2>
           <button onClick={()=> {
            setCount(count+1);        {/** changing state variable*/}
           }}>Count Increase</button>
           <h3>Location: {location}</h3>
           <h4>Contact: {contact}</h4>
        </div>
    )
}

export default User;