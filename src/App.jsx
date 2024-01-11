// src/App.jsx
import React from "react";
import BrailleKeyboard from "./BrailleKeyboard";

const App = () => {
  return (
    <center>
      <div className="app">
        <h1>Virtual Braille Keyboard</h1>
        <BrailleKeyboard />
      </div>
    </center>
  );
};

export default App;
