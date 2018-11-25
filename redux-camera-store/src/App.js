import React, { Component } from 'react';
import './App.css';
import TopNav from './components/topNav';
import CameraList from './components/CameraList';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className='row'>
          <div className='col-8'><CameraList /></div>
          <div className='col-4'><Cart /></div>
        </div>
      </div>
    );
  }
}

export default App;
