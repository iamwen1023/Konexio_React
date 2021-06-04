
import React from "react";
import "./App.css";
import Counter from "./Counter"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1 : 0 , 
      count2 : 0 ,
    };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }
  decrementCount = (i)=> {
    if (this.state["count"+i] <= 0)
      return;
    if (i === 1 && this.state.count1 === this.state.count2)
      return;
    if (i === 2 && this.state.count1 === this.state.count2){
        this.setState ({
          count1 : this.state.count1 -1,
        });
      }
    this.setState({ 
      ["count"+i] : this.state["count"+i] -1
    });
    console.log(this.state["count" + i]);
  }
  incrementCount = (i)=> {
    if (this.state["count"+i] >= 100)
      return;
    if (i === 1 && this.state.count1 === this.state.count2){
      this.setState ({
        count2 : this.state.count2 +1,
      });
    }
    this.setState ({
      ["count"+i] : this.state["count"+i] +1,
    });
    console.log(this.state["count" + i]);
  }
  render() {
    return (
      <div>
      <Counter 
      count = {this.state.count1}
      addFunction= { () => this.incrementCount(1)} 
      subtractFunction={ () => this.decrementCount(1)} 
      />
      <Counter 
      count = {this.state.count2}
      addFunction= { () => this.incrementCount(2)} 
      subtractFunction={ () => this.decrementCount(2)} 
      />
      </div>
    );
  }
}

export default App;
