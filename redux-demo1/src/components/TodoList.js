import React, { Component } from 'react';
import { Input ,Button ,List,Typography} from 'antd';
import store from '../store/index'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStorechange = this.handleStorechange.bind(this)

        store.subscribe(this.handleStorechange)   // 通过store.subscribe 把reducer传递过去的 state新值 映射到 组件中 
    }
    handleInputChange(e){
        const action = {
            type:'change_input_value',
            value : e.target.value
        }
        store.dispatch(action)
    }
    handleStorechange(){
        console.log('handleStorechange changed')

        this.setState( store.getState()) // 从store里面重新取改变后的新数据 
    }
    render() {
        return (
            <div className='todolist_box'>
                  <Input placeholder="Basic usage" value = {this.state.inputValue} onChange = {this.handleInputChange}/> 
                  <Button type="primary">Primary</Button>

                  <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
                    />
            </div>
        );
    }
}

export default TodoList;