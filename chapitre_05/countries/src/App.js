import './App.css';
import React from 'react';
import Button from "./Button";
import Card from "./Card";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      capital : "",
      flag : "",
      population : "",
      region : "",
    }
    this.getCountry = this.getCountry.bind(this)
  }
  getCountry(country){
    let url = "http://localhost:3003/" + country;
    console.log(url);
    fetch(url)
    .then(res => res.json())
	  .then(result => {
      console.log(result);
		this.setState({ 
      name : result.name,
      capital : result.capital,
      flag : result.flag,
      population : result.population,
      region : result.region,
    });
	  })
	  .catch(error => console.error(error));
  }
  componentDidMount(){
    this.getCountry("France");
  }




  render(){
  return (
    <div className="App">
      <h2>Country selector</h2>
      <div className="container">
        <div className="row">
          <div className="col">
          <Button getInfo = {this.getCountry}>France</Button>
          </div>
          <div className="col">
          <Button getInfo = {this.getCountry}>Brazil</Button>
          </div>
          <div className="col">
          <Button getInfo = {this.getCountry}>Croatia</Button>
          </div>
          <div className="col">
          <Button getInfo = {this.getCountry}>Taiwan</Button>
          </div>
        </div>
      </div>
      <Card 
      flag={this.state.flag} 
      name={this.state.name} 
      capital={this.state.capital}
      region= {this.state.region}
      population= {this.state.population}/>  
    </div>
  );
}
}

export default App;
