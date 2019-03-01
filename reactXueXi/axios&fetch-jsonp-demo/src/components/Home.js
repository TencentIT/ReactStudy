import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            name :'demo',
            name2:'haha',
            userInfo : {
                sex:'f',
                num:'33333'
            }
        }

        this.getMessage = this.getMessage.bind(this)
    }
    
    run () {
        alert(' run ')
    }

    getUserInfo () {
        alert(this.state.name)
    }

    getMessage() {
        alert(this.state.userInfo.sex)
    }

    getNum = ()=>{
        alert(this.state.userInfo.num)
    }

    setName = (str,str2)=>{
        this.setState({
            name:str,
            name2:str2
        })
    }
    render() {
        return (
            <div>
                Home 111
                <p>name : {this.state.name}  sex : {this.state.userInfo.sex}  num :{this.state.userInfo.num}</p>
                <button onClick = {this.run}> run </button>
                <br/> <br/><br/>
                <button onClick = {this.getUserInfo.bind(this)}>方法1-改变this指向getUserInfo</button>

                <br/> <br/><br/>
                <button onClick = {this.getMessage}>方法2-改变this指向getMessage</button>

                <br/> <br/><br/>
                <button onClick = {this.getNum}>方法3-改变this指向getNum</button>


                <br/> <br/><br/>
                <button onClick = {this.setName.bind(this,'womenyiqi','miaomiao')}>setState设置一个变量的值</button>

                <p>打印name改变后的值 ： {this.state.name} {this.state.name2} </p>
            </div>
        )
    }
}


export default Home 