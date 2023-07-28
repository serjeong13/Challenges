import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? <span>😊</span> : <span>😔</span>}</div>;
}
