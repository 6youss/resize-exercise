import React from "react";
import "./App.css";
import Resizable from "./Resizable";

const App: React.FC = () => {
  return (
    <div className="App">
      <Resizable>
        <p>Hello</p>
      </Resizable>
    </div>
  );
};

export default App;
