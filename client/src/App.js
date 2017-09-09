import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={() => this.test()} className="App-intro">
          Click Me: 
          {this.state.text}
        </p>
      </div>
    );
  }
  test() {
    fetch("/api/helloworld")
          .then(res => res.text())
          .then(res => this.setState({text: res}));
  }
}

export default App;
