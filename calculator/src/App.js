import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
//import Screen from "./components/Screen.js";
import Btn from "./components/button.js";
import Row from "react-bootstrap/Row";
import Keypad from "./components/Keypad.js";
import Screen from './components/Screen.js';

//import Keypad from './components/keypad.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: ''
    };
  }

  calculate = () => {
    try {
        const result = eval(this.state.screen);
        this.setState({screen: result});
    } catch (e) {
        this.setState({screen: 'error'})
    }
}
handleClick = e => {
  const value = e.target.getAttribute('data-value');
  switch(value) {
      case 'C':
          this.setState({ screen: ''});
          break;
      case '=':
          this.calculate();
          break;
      default:
          this.setState({ screen: this.state.screen + value});
  }
}

  render() {
    return (
      <Container className='mt-5 align-items-center justify-content-center'>
        <Screen data={this.state.screen} />
        <div className="wrapper">
          <Keypad />
          <Row>
            <Btn onClick={this.handleClick}label='+'value="+">+</Btn>
            <Btn onClick={this.handleClick}label='*'value="*">*</Btn>
            <Btn onClick={this.handleClick}label='-'value="-">-</Btn>
            <Btn onClick={this.handleClick}label='/'value="/">/</Btn>
            <Btn onClick={this.handleClick}label='C' value="C">C</Btn>
            <Btn onClick={this.handleClick}label='Del' value="Del">Del</Btn>
            <Btn onClick={this.handleClick}label='='value="=">=</Btn>
            <Btn onClick={this.handleClick}label='.'value=".">.</Btn>
          </Row>
          <Row>
            <Btn onClick={this.handleClick}label='7'value="7">7</Btn>
            <Btn onClick={this.handleClick}label='8'value="8">8</Btn>
            <Btn onClick={this.handleClick}label='9'value="9">9</Btn>
          </Row>
          <Row>
            <Btn onClick={this.handleClick}label ='6'value="6">6</Btn>
            <Btn onClick={this.handleClick}label ='5'value="5">5</Btn>
            <Btn onClick={this.handleClick}label ='4'value="4">4</Btn>
          </Row>
          <Row>
            <Btn onClick={this.handleClick}label='3'value="3">3</Btn>
            <Btn onClick={this.handleClick}label='2'value="2">2</Btn>
            <Btn onClick={this.handleClick}label='1'value="1">1</Btn>
            <Btn onClick={this.handleClick}label='0'value="0">0</Btn>
          </Row>
        </div>
      </Container>
    );
  }
  

// keyInput(key) {
//   const keyValue = key.target.value;
//   this.setState((key) => ({
//     numInput: keyValue
//   }))

// }

//   if (keyValue === '=') {
//     if(this.state.numInput !=='') {
//       return
//       this.setState({total:eval(this.state.numInput), numInput:''})      
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <Screen />
//         <div className="wrapper">
//           <Row>
//             <Button  label={"*"}>*</Button>
//             <Button label={"+"}>+</Button>
//             <Button label={"-"}>-</Button>
//             <Button label={"/"}>/</Button>
//             <Button label={"C"}>C</Button>
//             <Button label={"Del"}>Del</Button>
//             <Button label={"="}>=</Button>
//             <Button label={"."}>.</Button>
//           </Row>
//           <Row>
//             <Button onClick = {this.keyInput}
// value="7">7</Button>
//             <Button label={"8"}>8</Button>
//             <Button label={"9"}>9</Button>
//           </Row>
//           <Row>
//             <Button label={"6"}>6</Button>
//             <Button label={"5"}>5</Button>
//             <Button label={"4"}>4</Button>
//           </Row>
//           <Row>
//             <Button label={"3"}>3</Button>
//             <Button label={"2"}>2</Button>
//             <Button label={"1"}>1</Button>
//             <Button label={"0"}>0</Button>
//           </Row>
//         </div>
//       </div>
//     );
//   }

  // keypress = value => {
  //   console.log(value);

  //   this.setState({
  //     total:this.state.total += value
  //   })
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Calculator</h1>
  //       <Keypad
  //       keypress={this.keypress}
  //       valueInput={this.state.total}
  //       />
  //     </div>
  //   );
  // }
}

export default App;

//  addToInput = key => {
//       this.setState({this.state.input + key
//       })
//  }

//   render() {

//     return (
//       <div className= 'App'>
//         <div>
//           <input value = {this.state.input}></input>

//         </div>
//         <div>
//         <div className="wrapper">
//         <div className="row">
//           <Button onClick={() => this.addToInput(7)}>7</Button>
//           <Button>8</Button>
//           <Button>9</Button>
//           <Button>/</Button>
//         </div>
//         <div className="row">
//           <Button>4</Button>
//           <Button>5</Button>
//           <Button>6</Button>
//           <Button>*</Button>
//         </div>
//         <div className="row">
//           <Button>1</Button>
//           <Button>2</Button>
//           <Button>3</Button>
//           <Button>+</Button>
//         </div>
//         <div className="row">
//           <Button>.</Button>
//           <Button>0</Button>
//           <Button>=</Button>
//           <Button>-</Button>
//         </div>
//         <div className="row">
//           <Button onClick={() => this.reset()}>C</Button>
//         </div>
//       </div>

//         </div>

//       </div>

//     )
//   }
// }

// export default App;
