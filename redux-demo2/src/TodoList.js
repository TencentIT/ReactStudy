import React , {Component} from  'react'
import store from './store'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const {inputValue ,list ,  changeInputValue}  = props
    return (
        <div>
            <div>
                <input type="text" value = {inputValue} onChange={changeInputValue}/>
                <button onClick={this.props.handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

// 让 store 和 TodoList 做连接 
const mapStateToProps = (state) => {
    return  {
        inputValue : state.inputValue,
        list : state.list
    }
}
// 把 store的dispatch 方法挂载到props 
const mapDispatchtoProps = (dispatch) => {
    return {
        changeInputValue(e) {    
            const action = {
                type : 'change_input_value',
                value : e.target.value
            }
            dispatch(action )
        },
        handleClick() {
             
        }
    }
}


export default connect(mapStateToProps,mapDispatchtoProps )(TodoList);