import React, { Component } from 'react';
import { Input ,Button ,List,Typography} from 'antd';
import store from '../store/index'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(this.state)
    }
    
    render() {
        return (
            <div className='todolist_box'>
                  <Input placeholder="Basic usage" value = {this.state.inputValue}/> 
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