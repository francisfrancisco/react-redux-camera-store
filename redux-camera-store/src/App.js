import React, { Component } from 'react';
import './App.css';
import TopNav from './components/topNav';
import CameraList from './components/CameraList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <CameraList />
      </div>
    );
  }
}

export default App;
