import React from 'react'
class List extends React.Component {
    render(){
        return(
            <div>
            {this.props.list.map((number, index) =>
            <div>
            <li>{number.name} : {number.price}  
            <button onClick={()=> this.props.updatelist(index)}>Delete</button>
            </li>
            
            </div>
            )}
            </div>
        )
    }
}
export default List;