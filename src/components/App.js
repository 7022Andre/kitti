import React, { Component } from 'react';
import logo from '../images/logo.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Kitti</h1>
          <h3>A Kids Activity Fun Timer</h3>
        </div>

        <div className="App-intro jumbotron">
          <h3>Why? Why? Why?</h3>
          <br />
          <p>Help your child understand and visualize time by setting goals.</p>
          <button className="btn btn-success" onClick="">Get Started</button>
        </div>
      </div>
    );
  }
}

export default App;
