import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      validated : false,
      isLogged: false,
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const form = event.currentTarget
    if(form.checkValidity() === true) { 
      this.setState({ isLogged: true })
      this.setState({validated:true})
    } 
  }
  renderForm(){
    return(
      <div className="form App ">
      <h1>Login</h1>
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" placeholder="Entre password..." />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
      </Form>
      </div>
    )
  }
  renderFormfinished(){
    return(
      <div><h1>form submitted</h1></div>
    )
  }
   
  render(){
  return (
    <div >
      {this.state.isLogged=== true ? this.renderFormfinished() :this.renderForm()  }
    </div>
  )
  }
}

export default App;
