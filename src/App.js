import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
class App extends Component {
  state = ({
    input : ''
  });

  changeInputHandler = (event) =>{
    return (
      this.setState({input: event.target.value})
    )
  }
  
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeInputHandler}></input>
        <ValidationComponent text={this.state.input}></ValidationComponent>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
