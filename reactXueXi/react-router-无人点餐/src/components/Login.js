import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFlag: false
    };
  }

  goLogin = (e) => {
    e.preventDefault()
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(username, password);
    if(username == 'admin' && password == '123456'){
       this.setState({
        loginFlag :true 
       })
    }else {
        alert('跳转失败')
    }
  };

  render() {
    if(this.state.loginFlag){
        return <Redirect to = '/' />
    }
    return (
    
      <div className="formBox">
        <form onSubmit={this.goLogin} className="loginBox">
          用户名：
          <input type="text" ref="username" /> <br />
          密码：
          <input type="password" ref="password" /> <br />
          <button>登录</button>
        </form>
      </div>
    );
  }
}

export default Login;
