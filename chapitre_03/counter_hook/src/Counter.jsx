import React, { useState } from 'react';
import './App.css';

function Counter(props) {

  return (
    <div>
    <h2>Counter</h2>
    <div className="container">
        <h2 className="col-4" >Sum : {props.count}</h2>
        <div className="row">
            <button className="col-4 button"onClick={props.addFunction} style={{ backgroundColor: 'DarkSeaGreen' }}>+</button>
            <button className="col-4 button" onClick={props.subtractFunction} style={{ backgroundColor: 'DarkSalmon' }}>-</button>
        </div>
    </div>
  </div>
  );
}

export default Counter;
