import React from "react";
import "./App.css";

function App (props) {
  return (
    <div className="App">
      <header className="app-header">
        <span>turing ecommerce</span>
      </header>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default App;
