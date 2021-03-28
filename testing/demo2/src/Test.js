import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timeFunc = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timeFunc);
  }
  tick() {
    this.setState({
      time: this.state.time + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
