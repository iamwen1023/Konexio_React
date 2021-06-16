import React from 'react'
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productName:"",
            price: 5,
        }
        this.updateProductName= this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }
    updateProductName(e){
        this.setState({productName:e.target.value})
        //console.log(e.target.value);
    }
    updatePrice (e){
        this.setState({price:e.target.value})
        //console.log(e.target.value);
    }
    render(){
        return(
            <div>
            <InputGroup className="mb-3">
            <FormControl required type="text" onChange={this.updateProductName} placeholder="Item"/>
            <Button variant="primary" onClick={()=>{this.props.additem(this.state.productName, this.state.price); this.props.swiftToList();}}>Add</Button>
            <FormControl type="range" min={0} max={10} onChange={this.updatePrice}/>
            <Form.Label>{this.state.price}€</Form.Label>
            </InputGroup>
            </div>
        )
    }
}
export default Add;