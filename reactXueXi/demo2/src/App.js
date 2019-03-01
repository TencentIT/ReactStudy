import React, { Component } from 'react';
import './App.css';
import Test from './Test'
import Test2 from './Test2';

class Title extends Component{
  constructor(){
    super();
  }

  render() {
    var themeColor  = this.props.themeColor

    return(
      <div >
        <h1 style={{color:themeColor}}>标题</h1>
      </div>
    )
  }
}

class Button extends Component{
  constructor(){
    super()
  }

  handleClick(color){
    console.log(color)
  }

  render(){
    var themeColor = this.props.themeColor
    return (
      <div>
        <button onClick={()=>this.handleClick('red')} style={{color:themeColor}}>红色</button>
        <button onClick={()=>this.handleClick('green')} style={{color:themeColor}}>绿色</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      themeColor : 'red',
      isRenderTest : true
    }
  }
  
  render() {
    var themeColor  = this.state.themeColor;
    return (
      <div className="App">
        <p>App</p>
        {this.state.isRenderTest ?  <Test></Test> : '不渲染'}
        <Title themeColor={themeColor}></Title>
        <Button themeColor={themeColor}/>

        

        <button typew="button" onClick = {()=>this.setState({})}> App setState 更新</button>
        <br/>
        <button type="button"
         onClick = {() => this.setState({
          isRenderTest : !this.state.isRenderTest 
         })}>
          切换Test显示/隐藏
         </button>



         <Test2></Test2>
      </div>
    );
  }
}

export default App;
