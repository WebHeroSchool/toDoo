import React from 'react';
import logo from './logo.svg';
import './App.css';
import *as nums from "./components/Numbers"

const name = "sergey";
const isOpen = true;
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{background: "grey"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Привет {name}</p>
          <p>{nums.count} {"*"} {nums.lenght} {"="} {nums.count * nums.lenght}</p>
      </header>
    </div>
  );
}

export default App;
