import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Onglet from './Onglet';
import List from './List';
import Pay from './Pay';
import Add from './Add';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: 'add',
      items: [],
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
  }
  selectAdd =()=> {
    this.setState({
      activeTab : "add"
    })
  }
  selectList =()=> {
    this.setState({
      activeTab : "list"
    })
  }
  selectPay =()=> {
    console.log("pay");
    this.setState({
      activeTab : "pay"
    })
  }
  rendreItem(activeTab){
    console.log(this.state.activeTab);
    if (activeTab === "add")
      return <Add />;
    else if (activeTab  === "list")
      return <List />;
    else if (activeTab  === "pay")
      return <Pay />;
  }
  addItem(name,price){
    this.setState({
      items:[...this.state.items, {name : name, price: price}]
    })
    console.log(this.state.items); 
  }

 render () {
  return (
    <div className="App form">
      <h2>Bakery</h2>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectAdd} additem={this.addItem}>Add</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectList}>List</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</Onglet>
      {this.rendreItem(this.state.activeTab)}
    </div>
  )
  }
}

export default App;
