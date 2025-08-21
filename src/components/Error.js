import React from "react";
import { useRouteError } from "react-router-dom"; // hook to get the error 
const Error = ()=>{
    const error = useRouteError()
    console.log(error);
    console.log(error.data);
    
    return (
        <div>
            <h1>Ooops!!!</h1>
            <h2>Something Went Wrong</h2>
            <p style={{color:"red"}}>{error.status}:{error.statusText}</p>  {/** retrieved the actual cause from const error */}
            <p style={{color:"red"}}>{error.data}</p>
            <p> &copy; Awinash</p>
        </div>
    );
}

export default Error;