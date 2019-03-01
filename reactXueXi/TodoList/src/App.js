import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Button from './Button'
import TodoList from './TodoList'


class App extends Component {

  constructor(){
    super()
    
  }

  
  render() {
    return (
      <div className="App">
        <Button />
        <br/><br/> <br/>

      <TodoList />
      </div>
    );
  }
}


export default App;
