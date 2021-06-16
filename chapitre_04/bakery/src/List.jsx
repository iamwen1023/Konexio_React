import React from 'react'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
class List extends React.Component {
    renderEmpty (){
        return (
            <h2>No items are available</h2>
        )
    }
    renderList(){
        return (
            <div>
                <ListGroup>
            {this.props.list.map((number, index) =>

                <ListGroup.Item className="d-flex justify-content-between" key={index} >{number.name} : {number.price}€  
                <Button onClick={()=> this.props.updatelist(index)}>Delete</Button>
                </ListGroup.Item>   
                
                )}
                </ListGroup>
            </div>
        )
    }
    render(){
        return(
            <div>
            {this.props.list === null? this.renderEmpty() : this.renderList() }
            </div>
        )
    }
}
export default List;