import React from "react";
import ReactDOM from "react-dom/client";
 
//React Element
const heading = (<h1 id="heading" className="head" tabIndex="1">React Element using JSX</h1>);

//React Components:- Returns JSX elements and name starts with capital
//1. Class Bases Component - OLD - Based on JS classes


//2. Functional Component - NEW - Based on JS functions
const HeadingComponent = () => {
return <div id="container">
    <h1 className="heading">React Functional Component</h1>
    {heading} 
    <HeadingComponent2/>
    </div>;
    // above are the ways you render a element{} and a component</> inside another component aka component composition(only for the component part)
};
const HeadingComponent2 = () => <h1>React Functional Component2</h1>;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this is how a react element is rendered
root.render(<HeadingComponent />); //this is how a react component is rendered

