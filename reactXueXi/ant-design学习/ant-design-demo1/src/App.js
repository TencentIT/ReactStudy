import React, { Component } from 'react';
import {Button,Icon} from 'antd'
import './assets/css/index.css';

import Home from './components/Home'
import Date from './components/Date'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Date />
      </div>
    );
  }
}

export default App;
