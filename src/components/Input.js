import React, { Component } from 'react';

class Input extends Component {
  handleChange(event) {
    this.props.setNewText(event.target.value);
  }

  render() {
    return(
      <input onChange={this.handleChange.bind(this)}/>
    );
  }
}

export default Input;
