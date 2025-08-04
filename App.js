import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1",
    { id: "heading" },
    "Hello World form React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {}, "Heading from a nested element!")));

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "H11"), React.createElement("h2", {}, "H2")]));
root.render(parent);