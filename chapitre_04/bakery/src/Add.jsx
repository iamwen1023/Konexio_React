import React from 'react'

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productName:"",
            price: 1,
        }
        this.updateProductName= this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }
    updateProductName(e){
        this.setState({productName:e.target.value})
        console.log(e.target.value);
    }
    updatePrice (e){
        this.setState({price:e.target.value})
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
            <input required type="text" onChange={this.updateProductName}/>
            <button onClick={()=>this.props.additem(this.state.productName, this.state.price)}>Add</button>
            <br />
            <input type="range" min={1} max={10} onChange={this.updatePrice}/>
            </div>
        )
    }
}
export default Add;