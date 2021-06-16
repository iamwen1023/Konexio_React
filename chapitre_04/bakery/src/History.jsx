import './App.css';
import React from 'react';

class History extends React.Component {
    
  render(){
      console.log("this.props.history", this.props.history)
  return (
    <div >
        {this.props.history.map((arr1, index)=>{
        return(
        <div key={index}><h2>Achat {index}</h2>
        {arr1.map((arr2, index2)=>
        <p key={index2}>{arr2.name}: {arr2.price}</p>)}     
        </div>)})}     
    </div>
  );
}
}

export default History;