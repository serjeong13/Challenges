import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("Rocco is a champion");
    alert("You clicked me hard, BABY!");
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        color="blue"
        disabled={false}
        text="Click me hard, BABY"
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        color: "yellow",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
