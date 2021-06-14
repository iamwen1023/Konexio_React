import './App.css';
import React from 'react';

class Card extends React.Component {
 

  render(){
  return (
    <div className="App">
      <img src={this.props.flag} id="countryflag" alt={this.props.name} />
      <p>Country: </p>
      <p>{this.props.name}</p>
      <p>Capital: {this.props.capital}</p>
      <p>Region: </p>
      <p>{this.props.region}</p>
      <p>Population</p>
      <p>{this.props.population}</p>
    </div>
  );
}
}

export default Card;