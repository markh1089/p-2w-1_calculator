import React from "react";
import Button from "react-bootstrap/Button";

class Btn extends React.Component {
  render() {
    return (
      <Button
        className="button"
        onClick={this.props.onClick}
        data-size={this.props.size}
        data-value={this.props.value}>
        {this.props.label}
      </Button>
     
    );
  }
}

export default Btn;