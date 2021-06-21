import React from 'react'
import '../App.css';
const URL_PHOTO= 'https://image.tmdb.org/t/p/w500/'

class Card extends React.Component {
  
    render(){
      return (
        <div className="card smaller" onClick={()=>this.props.getNextTwo(this.props.id)} >
        <img
          className="card-img-top"
          src={URL_PHOTO + this.props.path_photo}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p >{this.props.resume}</p>
        </div>
      </div>
      )
    }
  }
  export default Card;
  