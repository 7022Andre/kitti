import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './components/App';
import Footer from './components/Footer';

class Index extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <Header />
        <App />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
