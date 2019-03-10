import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Pcontent from "./components/Pcontent";
import './components/assets/css/index.css'
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/product/:id" component={Pcontent} />
          <Route path="/login" component={Login} />
          
        </div>
      </Router>
    );
  }
}

export default App;
