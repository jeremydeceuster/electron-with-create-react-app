import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = async () => {
    // Example of two way communication
    // Delete / adapt if necessary
    const result = await window.backend.exampleFunction("test argument");
    console.log(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" onClick={handleClick}>
          Test Server Communication
        </a>
      </header>
    </div>
  );
}

export default App;
