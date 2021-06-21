import React from 'react'
import PokeMinicard from './PokeMinicard';

class Pokelist extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const beasts = this.props.results;
    // console.log('Pokelist props', this.props)
    return (
      <div className="row">
        {this.props.results.map( beast => <PokeMinicard {...beast} />)}
      </div>
    )
  }

  componentDidMount(){
    this.props.onMount()
  }
}

export default Pokelist