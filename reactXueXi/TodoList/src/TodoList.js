import React , {Component} from 'react'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:[
                {
                    checked:false,
                    name:'事情1'
                },
                {
                    checked:true,
                    name:'事情2'
                },
                {
                    checked:false,
                    name:'事情3'
                },
                {
                    checked:true,
                    name:'事情4'
                }
            ]
        }
    }

    add = ()=>{
      
        let tempArr = this.state.list

        tempArr.push(this.refs.inputVal.value)


        this.setState({
            list : tempArr
        })

        this.refs.inputVal.value = ''
        console.log(tempArr)
    }

    // 回车事件
    enterAdd = (e) =>{
        if(e.keyCode == 13){
            debugger
            let name  = this.refs.inputVal.value
            let list = this.state.list
            let tempArr = {
                name : name,
                checked : false
            }
            
            // tempArr =  list.push(tempArr)
    
    
            this.setState({
                list :  list.push(tempArr)
            })
    
            this.refs.inputVal.value = ''

            console.log(this.state.list)
        }

        

    }

    delete(key) {
        console.log(key)
        let tempArr = this.state.list
        tempArr.splice(key,1)
        this.setState({
            list:tempArr
        })
    }

    render() {
        return (
            <div>
                <h1>React  TodoList案例演示</h1>
                <input type="text" ref='inputVal' onKeyUp={this.enterAdd}/> 
                <button onClick={this.add} >增加+</button>

                <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return (
                                    <li key={key}> <input type="checkbox"/> {value.name}  <button onClick={this.delete.bind(this,key)}>删除-</button> </li>
                                )
                            }
                            
                        })
                    }
                    
                </ul>


                <br/><br/><br/><br/><br/>

                <h2>已完成事项</h2>

                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return (
                                    <li key={key}> <input type="checkbox"/> {value.name} <button onClick={this.delete.bind(this,key)}>删除-</button> </li>
                                )
                            }
                            
                        })
                    }
                    
                </ul>
            </div>

        );
    }
}

export default TodoList;