import React from "react";
import "./styles/global.css";

class Box extends React.Component {
  render() {
    let x;
    if (this.props.unit !== "L") {
      x = (
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          value={this.props.value}
          step={this.props.icon === "directions_walk" ? 1000: 1}
        />
      );
    }
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          {this.props.unit}
        </p>
        {x}
      </div>
    );
  }
}

export default Box;
