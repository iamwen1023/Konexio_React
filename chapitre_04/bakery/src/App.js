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
    this.addItem = this.addItem.bind(this)
    this.deleteItme = this.deleteItme.bind(this)
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
      return <Add additem={this.addItem} swiftToList={this.selectList}/>;
    else if (activeTab  === "list")
      return <List list={this.state.items} updatelist={this.deleteItme}/>;
    else if (activeTab  === "pay")
      return <Pay />;
  }
  addItem(name,price){
    console.log("hello");
    this.setState({
      items:[...this.state.items, {name : name, price: price}]
    })
    console.log(this.state.items); 
  }
  deleteItme(index){
    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    })
  }
 render () {
  return (
    <div className="App form">
      <h2>Bakery</h2>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectList}>List</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</Onglet>
      {this.rendreItem(this.state.activeTab)}
    </div>
  )
  }
}

export default App;
