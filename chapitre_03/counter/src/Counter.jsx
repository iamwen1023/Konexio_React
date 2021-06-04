
import React from "react";
import "./App.css";

class Counter extends React.Component {
 
  render() {
    return (
    <div>
      <h2>Counter</h2>
            <div class="container">
                <h2 className="col-4" >Sum : {this.props.count}</h2>
                <div class="row">
                    <button className="col-4 button"onClick={this.props.addFunction} style={{ backgroundColor: 'DarkSeaGreen' }}>+</button>
                    <button className="col-4 button" onClick={this.props.subtractFunction} style={{ backgroundColor: 'DarkSalmon' }}>-</button>
                </div>
            </div>
    </div>
    );
  }
}

export default Counter;
