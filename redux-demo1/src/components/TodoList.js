import React, { Component } from 'react';

import store from '../store/index'
import { getInputChangeAction ,getAddItemAction , getDeleteItemAction} from  '../store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props){ 
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStorechange = this.handleStorechange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this )
 
        store.subscribe(this.handleStorechange)   // 监听 store 里面值的变化 
         
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
 
    handleBtnClick(){
       const action =  getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
          <TodoListUI  
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            list = {this.state.list}
            handleItemDelete = {this.handleItemDelete}
          />
        );
    }
}

export default TodoList;