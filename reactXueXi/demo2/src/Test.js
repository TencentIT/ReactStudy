import React ,{Component} from 'react'

export default class Test extends Component { 
    constructor(props) { 
        console.log('constructor ')
        super(props)

        this.state = {
            time : new Date()
        }

    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    componentWillMount(){
        console.log("组件将要加载 componentWillMount")
        this.timeId = setInterval(()=>this.tick(),1000)

    }

    componentDidMount(){
        console.log("组件已经加载 componentDidMount")
    }

    // 更新生命周期
    componentWillReceiveProps(){
        console.log("组件将要接收参数 componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("组件是否应该更新 shouldComponentUpdate")
        console.log(nextState)
        if(nextState.time % 2 == 0 ){
            return true
        }
        return false;
    }

    componentWillUpdate(){
        console.log("组件将要更新 componentWillUpdate")
        
    }

    // getSnapshotBeforeUpdate(){
    //     console.log("在更新前获取截图 getSnapshotBeforeUpdate")
    // }

    componentDidUpdate(){
        console.log("组件更新完毕 componentDidUpdate")
    }

    //卸载
    componentWillUnmount(){
        console.log("组件将要卸载 componentWillUnmount")
        clearInterval(this.timeId)
    }




    render() {
        console.log('render')

        return (
            <div style={{border:"1px solid red" }}>
                Test
               <h1> 定时器的时间： {this.state.time.getSeconds()}</h1> 
                <button onClick={()=>this.setState({})}>setState组件更新</button>

                <button onClick = {()=>this.forceUpdate()}>forceUpdate 组件强制更新</button>
            </div>
        )
    }
}