import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> is a function that returns object

const heading = React.createElement("h1", {id:"heading"}, "This is react!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //replace everything inside the root  in  html