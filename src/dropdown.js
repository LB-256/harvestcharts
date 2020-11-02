import React, { Component } from "react";
import { Form } from "react-bootstrap";

class SimpleSelect extends Component {
  onChangeColor() {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        Simple select element of react-bootstrap
        <hr />
        Select any color :
        <Form.Control
          as="select"
          custom
          onChange={this.onChangeColor.bind(this)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
        </Form.Control>
      </div>
    );
  }
}

export default SimpleSelect;