import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';

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
