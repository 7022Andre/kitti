import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './common/header';
import Footer from './common/footer';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
