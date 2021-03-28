import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          type="button"
          style={{ color: this.props.themeColor }}
          onClick={() => this.props.handleClick(this.props.color)}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
