import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <h1>{this.props.displayText}</h1>
    );
  }
}

export default Display;
