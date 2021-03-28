import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./LikeButton";

class Demo1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="demo1">
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LikeButton />
        </body>
      </div>
    );
  }
}
export default Demo1;
