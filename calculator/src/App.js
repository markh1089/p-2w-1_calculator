import './App.css';
import React from 'react';
//import Calculator from './Calculator.js';
//import Keypad from './Keypad.js';
//import Screen from './Screen.js';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen:""
    }
  }

  buttonPress(){
    console.log('1');
    
  }


  render() {
    return(
      <>
      <h1>Calculator App</h1>
      <p>This is the calculator screen {this.state.count}</p>
      <button onClick={() => this.buttonPress()}>1</button>
      <button onClick={() => this.buttonPress()}>2</button>
      <button onClick={() => this.buttonPress()}>3</button>
      <button onClick={() => this.buttonPress()}>4</button>
      <button onClick={() => this.buttonPress()}>5</button>
      <button onClick={() => this.buttonPress()}>6</button>
      <button onClick={() => this.buttonPress()}>7</button>
      <button onClick={() => this.buttonPress()}>8</button>
      <button onClick={() => this.buttonPress()}>9</button>
      <button onClick={() => this.buttonPress()}>clear</button>
      
      </>
    )
  }
}

export default App;
