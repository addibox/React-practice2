import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
  state = ({
    input : ''
  });

  changeInputHandler = (event) =>{
    return (
      this.setState({input: event.target.value})
    )
  }
  
  deleteCharHandeler = (index) => {
    const currentText = this.state.input.split('');
    currentText.splice(index, 1);
    const deletedText = currentText.join('');
    this.setState(
      {input: deletedText});
  }
  
  render() {
    const charList = this.state.input.split('').map((ch, index) => {
      return <CharComponent character = {ch} key={index} delete= {this.deleteCharHandeler}/>
    });
    return (
      <div className="App">
        <input type="text" onChange={this.changeInputHandler} value={this.state.input}></input>
        <ValidationComponent text={this.state.input}></ValidationComponent>
        {charList}
      </div>
    );
  }
}

export default App;
