import React, { Component } from 'react';
import { Input ,Button ,List} from 'antd';

class TodoListUI extends Component {
    state = {  }
    render() {
        return (
            <div className='todolist_box'>
                <Input placeholder="Basic usage" value = {this.props.inputValue} onChange = {this.props.handleInputChange}/> 
                <Button type="primary" onClick={this.props.handleBtnClick }>添加</Button>
                <List.Item
                bordered
                dataSource={this.props.list}
                renderItem={(item,index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }} >{item}</List.Item>)}
                />
             </div>
        );
    }
} 

export default TodoListUI;