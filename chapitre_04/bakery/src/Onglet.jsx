import React from 'react'
import { Button } from 'react-bootstrap';

class Onglet extends React.Component {
    render(){
        return(
            <Button variant="outline-primary" onClick={this.props.onClick}>{this.props.children}</Button>
        )
    }
}
export default Onglet;