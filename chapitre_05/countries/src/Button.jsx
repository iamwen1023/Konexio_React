import './App.css';
import React from 'react';

class Button extends React.Component {
 

  render(){
  return (
    <div className="App">
      <button type="button" className="btn btn-primary" onClick={()=>this.props.getInfo(this.props.children)}>{this.props.children}</button>
    </div>
  );
}
}

export default Button;
