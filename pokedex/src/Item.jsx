import React from 'react'
import './App.css';

class Item extends React.Component {
    render(){
        return (
        <div className="card">
        <img
          className="card-img-top"
          src={this.props.productPhoto}
          alt=""
          onClick={()=>{this.props.getInfo(this.props.id)}}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.productName}</h5>
        </div>
      </div>
    )
  }
}

export default Item;