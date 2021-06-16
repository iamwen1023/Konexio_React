import React from 'react'
import Card from './Card'

class Pay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            basket : [],
            total :0,
            totalTVA:0,
            totalEcoTax:0,
            totalTTC: 0
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(name, price){
        this.setState({ basket: [...this.state.basket, { name, price }] })

        let total = 0
        for (let i = 0; i < this.state.basket.length; i++) {
                const item = this.state.basket[i]
                total = total + item.price
        }
        const totalEcoTax = 0.03 * this.state.basket.length
        const totalTVA = total * 20 / 100
        const totalTTC = total + totalTVA + totalEcoTax
        this.setState({ total, totalTVA, totalEcoTax, totalTTC })
        console.log("total", total);
    }
    render(){
        return(
            <div>
            <p>Total: {this.state.total}</p>
            <p>TotalTVA: {this.state.totalTVA}</p>
            <p>TotalEcoTAX:{this.state.totalEcoTax}</p>
            <p>TotalTTC:{this.state.totalTTC}</p>
            <div className="row">
            {this.props.items.map((element, index)=>(
                <div className="col-4 mb-2">
                <Card 
                key={index}
                productName={element.name} 
                price={element.price} 
                onClick={this.handleSelect}/>
                </div>
            ))}
            </div>
            </div>
        )
    }
}
export default Pay;