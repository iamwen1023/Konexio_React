import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="form App">
      <h1>Login</h1>
      <label htmlFor="basic-url">Email address</label>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary">Button</Button>
    <InputGroup.Append>  
    </InputGroup.Append>
  </InputGroup>
  <label htmlFor="basic-url">Password</label>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
    </div>
  );
}

export default App;
