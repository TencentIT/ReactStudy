import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import Axios from './components/axios'
import FetchJsonp from './components/FetchJsonp'



class App extends Component {
  
  render() {
    return (
      <div className="App">
          根组件
          <Axios />

          <hr/> <br/> <br/> <br/>

        <FetchJsonp ></FetchJsonp>

      </div>
    );
  }
}

export default App;
