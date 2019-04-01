import React, { Component } from 'react';
import store from '../store/index'
import {getInitList, initListAction, getInputChangeAction ,getAddItemAction , getDeleteItemAction, initListAction} from  '../store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'   

class TodoList extends Component {
    constructor(props){ 
        super(props)
        this.state = store.getState()s
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStorechange = this.handleStorechange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this )
 
        store.subscribe(this.handleStorechange)   // 监听 store 里面值的变化 
         
    }

    componentDidMount() {
        // redux-thunk 写法
        //  const action  = getTodoList() 

        // axios.get('./list.json').then((res)=>{
        //     const data = res.data
        //      const action = initListAction(data)
        //     store.dispatch(action)
        // })

        // redux-saga 写法
        const action = getInitList()
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