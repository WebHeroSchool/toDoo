import React from 'react';
import logo from './logo.svg';
import './App.css';


const name = "sergey";
const isOpen = true;
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{background: "grey"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Привет {name}</p>
        <p>{123}</p>
        <p>{123+124}</p>
        <p>{123+124}</p>
       <p>{123>124}</p>
       <p>{isOpen ? "открыто":"закрыто"}</p>
       <p>{null}</p>
       <p>{undefined}</p>
       <p>{false}</p>
       <p>{true}</p>
      </header>
    </div>
  );
}

export default App;
