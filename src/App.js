import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">MINIFY YOUR URL</header>
      <div className='input-form'>
        <input className="enter-url" type="url" placeholder="Enter URL"></input>
        <button type="submit" className="submit-button">Minify</button>
      </div>
    </div>
  );
}

export default App;
