import React from 'react'
import './App.css';
import Item from './Item';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name :  "",
      photo: "",
    }
  }

  async componentDidMount(index){
    try{
      let url = 'https://pokeapi.co/api/v2/pokemon/'+ index;
      let urlPhoto = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + index +".png"
      const link = await fetch(url)
      const result =  await link.json()
      const photoLink = urlPhoto;
      this.setState({
        name : result.name,
        photo: photoLink,
      })
    }catch(error){
      console.error(error)
    }
  }
  render(){
    return (
      <div>
        <Item name={this.state.name} photo={this.state.photo} func = {this.componentDidMount} />
      </div>
    )
  }
}

export default List;