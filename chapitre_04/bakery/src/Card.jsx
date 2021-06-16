import './App.css';
import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image : "/img/item.png",
    }
  }
 

  render(){
  return (
    <div className="card">
    <button onClick={()=>this.props.onClick(this.props.productName, this.props.price)}
    >
      <img className="card-img-top" src={this.state.image} alt="" />
      </button>
      <h5 className="card-title">{this.props.productName}</h5>
      <p className="card-text">{this.props.price} €</p>
    </div>
  );
}
}

export default Card;