import "./styles.css";
import { useState } from "react";

export default function App() {
  //let isActive = false;
  let [isActive, toggleActive] = useState("true");

  function handleClick() {
    toggleActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
