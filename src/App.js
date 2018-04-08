import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Dashboard } from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="app" id="app">
          <Header />
          <SideBar />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
