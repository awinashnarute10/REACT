import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


