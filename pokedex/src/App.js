import React from 'react'
import './App.css';
import List from './List'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name :  "",
      height: "",
      weight: "",
      photo: "",
      type: [],
    }
  }

  async componentDidMount(){
    try{
      const link = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
      const result =  await link.json()
      const photoLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      console.log(result);
      let arr = [];
      result.types.map(x => arr.push(x.type.name));
      console.log("arry",arr);
      this.setState({
        name : result.name,
        height: result.height,
        weight: result.weight,
        type: arr.join(" "),
        photo: photoLink,
      })
      console.log(this.state);
    }catch(error){
      console.error(error)
    }
  }
  render(){
    return (
      <div>
        <div id="fullView">
          <div className="row">
            <div className="col">
            <img  src={this.state.photo} alt=""/>
            </div>
            <div className="col align-self-center">
              <h2>Name : {this.state.name} </h2>
              <h2>Height : {this.state.height} </h2>
              <h2>Weight : {this.state.weight} </h2>
              <h2>Type : {this.state.type} </h2>
            </div>
          </div>
        </div>
        <div>
        <List />
        </div>
      </div>
    )
  }
}

export default App;
