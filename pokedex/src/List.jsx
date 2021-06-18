import React from 'react'
import './App.css';
import Item from './Item';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    //   name :[],
    //   photo:[],
    arr: [],
    }
    this.itmeInfo = this.itmeInfo.bind(this)
  }

  async itmeInfo(index){
    try{
        let url = 'https://pokeapi.co/api/v2/pokemon/'+ index;
        //let urlPhoto = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + index +".png"
        const link = await fetch(url)
        const result =  await link.json()
        return result.name
      }catch(error){
        console.error(error)
      }
  }
  
  async componentDidMount(){
    let nameItem;
    let urlPhoto;
    for (let i = 1; i <150; i++){
        nameItem = await this.itmeInfo(i);
        urlPhoto =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + i +".png"
        // this.setState({
        //   name : [...this.state.name, name],
        //   photo: [...this.state.photo, urlPhoto],
        // })
        this.setState({
            arr: [...this.state.arr, [nameItem,urlPhoto]],
        })
    }
    console.log("this.state.arr",this.state.arr );
  }
 
  render(){
    return (
    <div className="row">
        {this.state.arr.map((item, index) =>
          <div className="col-6 col-md-4 col-lg-2">
            <Item
              id = {index + 1}
              key={index}
              productName={item[0]}
              productPhoto={item[1]}
              getInfo={this.props.getInfo}
            />
          </div>,
        )}
      </div>
    )
  }
}

export default List;