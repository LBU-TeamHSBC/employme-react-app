import React, { Component } from 'react';
import './App.css';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="app" id="app">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
