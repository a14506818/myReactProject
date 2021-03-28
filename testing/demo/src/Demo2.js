import React, { Component } from "react";
import Button from "./Button";

class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.themeColor }}>{this.props.children}</h1>
      </div>
    );
  }
}

export default class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      themeColor: "black",
    };
  }

  handleClick(newColor) {
    this.setState({
      themeColor: newColor,
    });
  }
  render() {
    var themeColor = this.state.themeColor;
    return (
      <div>
        <h4>Demo2</h4>
        <Title themeColor={this.state.themeColor}>Title</Title>
        <Button
          color="red"
          themeColor={this.state.themeColor}
          handleClick={(e) => this.handleClick(e)}
        >
          Red
        </Button>
        <Button
          color="green"
          themeColor={this.state.themeColor}
          handleClick={(e) => this.handleClick(e)}
        >
          Green
        </Button>
      </div>
    );
  }
}
