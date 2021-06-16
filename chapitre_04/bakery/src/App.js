import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Onglet from './Onglet';
import List from './List';
import Pay from './Pay';
import Add from './Add';
import History from './History';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: 'add',
      items: [],
      image: '../public/img/item.png',
      result: {},
      historyList:[],
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItme = this.deleteItme.bind(this)
    this.savehistory = this.savehistory.bind(this)
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
    this.setState({
      activeTab : "pay"
    })
  }
  selectHistory =()=> {
    this.setState({
      activeTab : "history"
    })
  }
  savehistory(history){
    this.setState({
      historyList:[...this.state.historyList, history]
    },()=>{ console.log("in app",history)})
   
  }
  rendreItem(activeTab){
    if (activeTab === "add")
      return <Add additem={this.addItem} swiftToList={this.selectList}/>;
    else if (activeTab  === "list")
      return <List list={this.state.items} updatelist={this.deleteItme}/>;
    else if (activeTab  === "pay")
      return <Pay items={this.state.items} savehis={this.savehistory} />;
    else if (activeTab === "history")
      return <History history={this.state.historyList} />
  }
  addItem(name,price){
    let imag;
    console.log("this.result", this.state.result);
    let found = this.state.result.find(element=>element.name === name)
    if (found){
      imag = found.image;
    }else{
      imag = '/img/item.png';
    }
    this.setState({
      items:[...this.state.items, {name : name, price: price, image: imag,}]
    })
    //console.log(this.state.items); 
  }
  deleteItme(index){
    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    })
  }
  async componentDidMount () {
    try {
      const result = await fetch('https://raw.githubusercontent.com/StephaneRavet/datamock/main/bakery.json')
      const resultJson = await result.json()
      this.setState({
        result :resultJson,
      })
    } catch (error) {
      console.error(error)
    }
  }
 render () {
  return (
    <div className="App form">
      <h2>Bakery</h2>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectList}>List</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</Onglet>
      <Onglet isSelected={this.state.activeTab} onClick={this.selectHistory}>History</Onglet>
      {this.rendreItem(this.state.activeTab)}
    </div>
  )
  }
}

export default App;
