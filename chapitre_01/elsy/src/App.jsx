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
  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
  }
  calculateWater = () => {
    let wateramount = 1.5;
    if (this.state.temperature > 20) {
      wateramount = wateramount + (this.state.temperature - 20) * 0.02;
    }
    if (this.state.heart > 120) {
      wateramount = wateramount + (this.state.heart - 120) * 0.0008;
    }
    if (this.state.steps > 120) {
      wateramount = wateramount + (this.state.heart - 10000) * 0.00002;
    }
    //console.log(wateramount);
    wateramount = wateramount.toFixed(2);
    this.setState({ water: wateramount });
  };

  onStepsChange = (e) => {
    this.setState({ steps: e.target.value }, this.calculateWater);
  };
  onHeartChange = (e) => {
    this.setState({ heart: e.target.value }, this.calculateWater);
  };
  onTempChange = (e) => {
    this.setState({ temperature: e.target.value }, this.calculateWater);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}
          />
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
