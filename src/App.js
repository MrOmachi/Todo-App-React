import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <TodoContainer />
      </React.StrictMode>
    </div>
  );
}

export default App;
