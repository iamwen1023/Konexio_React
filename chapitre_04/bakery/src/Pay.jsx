import React from 'react'
import Card from './Card'
import { Button } from 'react-bootstrap';

class Pay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            basket : [],
            total :0,
            totalTVA:0,
            totalEcoTax:0,
            totalTTC: 0,
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.saveAll = this.saveAll.bind(this);
    }
    handleSelect(name, price){
        const newBasket= [...this.state.basket, { name, price }]

        let total = 0
        for (let i = 0; i < newBasket.length; i++) {
                const item = newBasket[i]
                total = total + Number(item.price)
        }
        const totalEcoTax = 0.03 * newBasket.length
        const totalTVA = total * 20 / 100
        const totalTTC = total + totalTVA + totalEcoTax
        this.setState({ total, totalTVA, totalEcoTax, totalTTC, basket: newBasket })
    }
    clearAll(){
        this.setState({
            basket : [],
            total :0,
            totalTVA:0,
            totalEcoTax:0,
            totalTTC: 0,
        })
    }
    saveAll(){
        console.log("this.state.basket",this.state.basket);
        this.props.savehis(this.state.basket)
        // this.setState({
        //     savelist :[...this.state.savelist,  this.state.basket]
        // }, ()=>this.props.savehis(this.state.savelist))
    }
    
    render(){
        return(
            <div>
            <p>Total: {this.state.total}</p>
            <p>TotalTVA: {this.state.totalTVA}</p>
            <p>TotalEcoTAX:{this.state.totalEcoTax}</p>
            <p>TotalTTC:{this.state.totalTTC}</p>
            <Button variant="primary" onClick={this.clearAll} >Clear</Button>
            <Button variant="primary" onClick={this.saveAll} >Save</Button>
            <div className="row">
            {this.props.items.map((element, index)=>(
                <div className="col-4 mb-2">
                <Card 
                key={index}
                productName={element.name} 
                price={element.price}
                image={element.image}
                onClick={this.handleSelect}/>
                </div>
            ))}
            </div>
            </div>
        )
    }
}
export default Pay;