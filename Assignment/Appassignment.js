import React from "react";
import ReactDOM from "react-dom/client";

//React.Create Element 
const reactHeading  = React.createElement("div", {className:"title"},
      [React.createElement("h1",{},"h1"), React.createElement("h2",{},"h2"), React.createElement("h3",{},"h3")]
 );

//JSX
const jsxHeading  = (
<div className="title">
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
</div>
);

//React component

const ComponentHeading = () => {
    return <div className="title">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <ComponentHeading2/>
    </div>;
}

const ComponentHeading2 = () => <h1>Hello from another component</h1>;



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactHeading);
// root.render(jsxHeading);
root.render(<ComponentHeading/>);