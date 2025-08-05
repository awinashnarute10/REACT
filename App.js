import React from "react";
import ReactDOM from "react-dom/client";
 
const elem = <span> React Element</span>

const heading = (<h1 id="heading" className="head" tabIndex="1">React Element using JSX {elem}</h1>);

//React Components:- Returns JSX (or react element) and name starts with capital
//1. Class Bases Component - OLD - Based on JS classes


//2. Functional Component - NEW - Based on JS functions
const HeadingComponent = () => {
return <div id="container">
    <h1 className="heading">React Functional Component</h1>
    {heading} 
    {100+200}
    <HeadingComponent2/>
    <HeadingComponent2></HeadingComponent2>
    {HeadingComponent2()}
    </div>;
    // above are the ways you render a element or a variable or a piece of js code{} and a component<></> or </> inside another component aka component composition(only for the component part)

    //another way of rendering the compont inside component is { ()} as at the end of the way any js code can be put inside curly and component is nothing but JS function
};
const HeadingComponent2 = () => <h1>React Functional Component2</h1>;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this is how a react element is rendered
root.render(<HeadingComponent />); //this is how a react component is rendered

