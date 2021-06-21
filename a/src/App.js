import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokelist from './components/Pokelist';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();



class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      results:[]
    }
    this.getBeasts = this.getBeasts.bind(this)
    this.setBeasts = this.setBeasts.bind(this)
  }

  setBeasts(beasts){
    // console.log('beasts', beasts)
    this.setState(beasts)
  }

  getBeasts(){
    P.getPokemonsList({ limit: 8, offset: 0 })
    .then(response => this.setBeasts(response))
  }

  componentDidMount(){
    this.getBeasts();
  }

  /**
   * 
   * @param {string} url 
   */
  pokeUrlToImage(url){
    // https://pokeapi.co/api/v2/pokemon/1/
    // https://pokeres.bastionbot.org/images/pokemon/1.png
    const pokeNum = url.slice(-2, -1)
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeNum}.png`
  }

  render(){
    return (
    <div className="container-fluid p-0 m-0">
      <h1>This</h1>
      <Pokelist onMount={this.getBeasts} {...this.state} />
      {this.state.results.map( (beast, i) =>
      <img src={this.pokeUrlToImage(beast.url)}></img> )}
      {/* <img src={this.pokeUrlToImage(beast.url)}></img> )} */}
      {/* {this.state.results.map( (beast, i) =><img src="{pokeUrlToImage()}"></img><p key={i}>{beast.url}</p> )} */}
    </div>
    )
  }
}


export default App;
