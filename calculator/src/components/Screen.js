import React from 'react';
import Row from "react-bootstrap/Row";

class Screen extends React.Component  {
  render(){
      return(
          <div className="Display">
              {this.props.data}
          </div>
      );
  }
}

export default Screen;




//import Display from './components/InputScreen.js';





// const Screen =(props) => {
//     return (
//         <div className ='screen'>
//           <Row>
//             <input value = {props.numInput}/>
//           </Row>
//           <Row>
//             <input disabled></input>
//           </Row>     
//         </div>
//     )
// }

// export default Screen


// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import Input from 'react-bootstrap/Button';

// class Screen extends Component {
//     render() {
//       return (
//         <div className= 'screen'>
//             <input></input>
          
//         </div>
  
//       )
//     }
//   }
  
//   export default Screen;