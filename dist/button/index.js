import '../styles/global.css';
import React, { Component } from 'react';
export default class Button extends Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: ""
    }, this.props.children);
  }
}