import React from "react";
import ReactDOM from "react-dom/client";
import GuessTheNumber from './GuessTheNumber'

const App = () => {
  return (
   <GuessTheNumber/>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


