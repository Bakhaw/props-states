import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Input from './components/Input';


class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: ""
    }
  }

setNewText(displayText) {
  this.setState({displayText})
}

  render() {
    return (
      <div>
        <Display displayText={this.state.displayText}/>
        <Input setNewText={this.setNewText.bind(this)}/>
      </div>
    );
  }
}

export default App;
