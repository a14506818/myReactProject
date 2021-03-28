import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderTest: true,
    };
  }
  handleClick() {
    this.setState({
      isRenderTest: !this.state.isRenderTest,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" onClick={() => this.handleClick()}>
            {this.state.isRenderTest ? "Close Click" : "Open Click"}
          </button>
          {this.state.isRenderTest ? <Test /> : "No Render"}
        </header>
      </div>
    );
  }
}
