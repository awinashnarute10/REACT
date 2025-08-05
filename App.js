import React from "react";
import ReactDOM from "react-dom/client";
 
//JSX - (JS XML) - HTML like or XML Like syntax
//JSX - transpiled to JS(React.createElement) - by Babel(JS compiler/transpiler) - that is inside Parcel
const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">React using JSX</h1>);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); //replace everything inside the root  in  html

