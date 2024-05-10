import { Component } from "react";
import { useState } from "react";
import './App.css'


class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      Number:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }

   increment(){
    this.setState({Number:this.state.Number + 1})
  }

  decrement(){
    if(this.state.Number<=0){
      this.setState({Number:this.state.Number=0});
    }else{
      this.setState({Number:this.state.Number-1})
    }
  }

  reset(){
    this.setState({Number:0})
  }

   onMouseOverCaptureHandler = () => {
    
};

  render(){
   return <div id="container">
      <h1 id="name">Counter App</h1>
      <h3 id="count">{this.state.Number}</h3>
      <button id="increment" onClick={this.increment}>+</button>
      <button id="decrement" onClick={this.decrement}>-</button>
      <button id="reset" onClick={this.reset}>reset</button>
    </div>
  }
}

export default App;