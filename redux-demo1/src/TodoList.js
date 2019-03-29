import React, { Component } from 'react';
import { Input ,Button ,List} from 'antd';
import store from './store/index'
import {CHANGE_INPUT_VALUE ,ADD_TODO_ITEM , DELETE_TODO_ITEM } from  './store/actionTypes'
import { getInputChangeAction } from  './store/actionCreators'

class TodoList extends Component {
    constructor(props){ 
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStorechange = this.handleStorechange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
 
        store.subscribe(this.handleStorechange)   // 监听 store 里面值的变化 
         
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
 
    handleBtnClick(){
        const action = {
            type : ADD_TODO_ITEM
        }

        store.dispatch(action)
    }
    handleItemDelete(){
        const action = {
            type: DELETE_TODO_ITEM ,
        }

        store.dispatch(action)
    }
    render() {
        return (
            <div className='todolist_box'>
                  <Input placeholder="Basic usage" value = {this.state.inputValue} onChange = {this.handleInputChange}/> 
                  <Button type="primary" onClick={this.handleBtnClick }>添加</Button>

                  <List.Item
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index )} >{item}</List.Item>)}
                    />
            </div>
        );
    }
}

export default TodoList;