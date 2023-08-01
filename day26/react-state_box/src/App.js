import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let [isActive, toggleActive] = useState(false);

  function handleClick() {
    toggleActive(!isActive);
  }

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
