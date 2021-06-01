/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from "react";
import Box from "./Box.jsx";
import "./styles/global.css";
  const tempMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000;
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
        <Box icon="directions_walk" color="#3A85FF" value="1.5" unit ="L" />
        <Box icon="local_drink" color="black" value="3000" unit ="steps"/>
        <Box icon="favorite" color="red" value="200" unit ="bpm" />
        <Box icon="wb_sunny" color="yellow" value="-10" unit ="°C"/>
        </div>
      </div>
    );
  }
}

export default App;