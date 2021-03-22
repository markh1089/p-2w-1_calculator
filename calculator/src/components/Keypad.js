import React from "react";

class Keypad extends React.Component {
  render() {
    return (
      <div className="keypad">
        {this.props.children}
      </div>

    );
  }
}

export default Keypad;

// import './keypad.css';
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";

// class Keypad extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: 0
//     };
//   }

// keypress(key){
//   const value = key.target.value;
// return value}

//   render() {
//     return (
//       <div className="calculator">
//         <input className="screen" value={this.props.valueInput} disabled></input>
//         <h1>keys</h1>
//         <Button onClick={this.keypress} className="operator" value="/">
//           /
//         </Button>
//         <Button onClick={this.keypress} className="operator" value="*">
//           *
//         </Button>
//         <Button onClick={this.keypress} className="operator" value="+">
//           +
//         </Button>
//         <Button onClick={this.keypress} className="operator" value="-">
//           -
//         </Button>

//         <Button onClick={this.keypress} value="7">
//           7
//         </Button>
//         <Button onClick={this.keypress} value="8">
//           8
//         </Button>
//         <Button onClick={this.keypress} value="9">
//           9
//         </Button>

//         <Button onClick={this.keypress} value="6">
//           6
//         </Button>
//         <Button onClick={this.keypress} value="5">
//           5
//         </Button>
//         <Button onClick={this.keypress} value="4">
//           4
//         </Button>

//         <Button onClick={this.keypress} value="3">
//           3
//         </Button>
//         <Button onClick={this.keypress} value="2">
//           2
//         </Button>
//         <Button onClick={this.keypress} value="1">
//           1
//         </Button>

//         <Button value="C">C</Button>
//         <Button value="0">0</Button>
//         <Button value="=">=</Button>
//       </div>
//     );
//   }
// }

// export default Keypad;
