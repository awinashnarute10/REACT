import { useState } from "react";

const User = ({name, location, contact}) => {
   const [count, setCount] = useState(0);   // state varible in functional component
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