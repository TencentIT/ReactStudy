import React , {Component} from 'react'

export default class Test extends Component{
    constructor(props) {
        super(props)
    }

    handleClick = (event)=>{
        console.log(event)
        console.log('获取DOM',event.target)
        event.target.style.background = 'red'
        // console.log('改变DOM',event.target.style.background)

        // 获取dom的属性
        console.log(event.target.getAttribute('data-index'))

        console.log('获取input框输入的值',this.refs.username)

    }

    getInputValue(){

    }

    render(){
        return (
            <div>
               <button onClick={this.handleClick} data-index='wujiaqiang'>按钮 事件对象</button>

               <input type="text" ref='username'/>
            </div>
        )
    }
} 

