import React from "react";
import "./App.css";
const date = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
let time = new Date();
time = time.getHours();

let greeting = "";
const cssStyle = {};

if (time >= 3 && time < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green";
} else if (time >= 12 && time < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "Red";
} else if (time >= 16 && time < 21) {
  greeting = "Good eveining";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}

function App() {
  return (
    <>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
      <h2>
        {date} {curTime}
      </h2>
    </>
  );
}

export default App;
