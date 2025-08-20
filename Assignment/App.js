import React from "react";
import ReactDOM from "react-dom/client";
import DarkModeToggle from './DarkModeToggle';

const App = () => {
  return <DarkModeToggle/>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


