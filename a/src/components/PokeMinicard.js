import React from 'react';

class pokeMinicard extends React.Component{

  constructor(props){
    super(props);
    this.state = { pikie: '' }
    this.setSprite = this.setSprite.bind(this)
  }

  render(){
    return (
      <div className="col-2 text-center p-0">
        <img src={this.state.pikie}></img>
        <p>{this.props.name}</p>
      </div>
    )
  }

  setSprite(spriteUrl){
    this.setState( { pikie: spriteUrl } )
  }

  componentDidMount(){
    fetch(this.props.url)
    .then( res => res.json() )
    .then( pokeCard => this.setSprite(pokeCard.sprites.front_default) )
  }

}

export default pokeMinicard;