import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

// ✅ Complete the custom hook below
function useToggle(initialValue = false) {
  // your code here
  const [x, setx] = useState(initialValue);

  const toggle = () => setx((prevalue) => !prevalue); // to prevent stale state due to closure, but the setter always gets the latest value of state it was made with.

  return [x, toggle];
}

export default function App() {
  // ✅ Use the custom hook inside this component
  // const [isOn, toggle] = useToggle(false);
  const [isOn, toggle] = useToggle(false);
  return (
    /* your toggle function for the onClick method */
    <button data-testid="toggle-button" onClick = {toggle}>
      {/* Render "ON" or "OFF" based on state */}
      {isOn?"On":"OFF"}
    </button>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


// learnt about closure and stale state and why we need to pass refernce in setter instead of state itself when in closure