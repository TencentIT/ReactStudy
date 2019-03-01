import React, {Component} from 'react'


export default class Test2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isRender : true
        }   
    }

    getSnapshotBeforeUpdate(){
        console.log('更新前获取快照')
        return 'from getSnapshotBeforeUpdate'
    }

    render (){
        console.log('render里的',this.state)
        return (
            <div>
                <p>Test2</p> 
                <button onClick={()=>this.setState({})}>setState</button>
            </div>
        )
    }

    static getDerivedStateFromProps (){
        // 函数返回结果将会被添加到state 添加/更新state的内容
        console.log("静态生命周期函数")
        return {
            like : false
        }

    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentDidUpdate(){
        console.log('componentDidMount')
        return true
    }

    componentDidUpdate(prevProps,prevState,info){
        console.log('componentDidUpdate')
        console.log(info)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }


}   

