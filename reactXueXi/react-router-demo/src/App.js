import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import News from './components/News'
import Product from './components/Product'
import Content from './components/Content'
import ProductContent from './components/ProductContent'
import './assets/css/index.css'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">

            <header className = 'title'> 
              <Link to='/' exact>首页</Link>
              <Link to='/news'>新闻</Link>
              <Link to='/product'>商品</Link>

            </header>
            
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/product" component={Product} />
            <Route path="/Content/:id" component={Content} />
            <Route path="/ProductContent " component={ProductContent} />
          </div>
      </Router>
    );
  }
}

export default App;
