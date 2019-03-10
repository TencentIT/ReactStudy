import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./assets/css/index.css";

import routes from './module/router'
class App extends Component {
  render() {

    return (
      <Router>
        {/* 写法1 最普通写法 */}
        {/* <div>
          <header className="title" >
            <Link to="/">首页组件</Link>

            <Link to="/user">用户页面</Link>

            <Link to="/shop">商户</Link>
        </header>

          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path='/shop' component={Shop}/>
        </div> */}
        {/* 写法2 路由的模块化 */}

        

        <div>
          <header className="title" >
              <Link to="/">首页组件</Link>

              <Link to="/user">用户页面</Link>

              <Link to="/shop">商户</Link>
          </header>

          {/* 对 routes 进行遍历   */}
          {
            routes.map((route,key)=>{
              if(route.exact){
                return <Route key={key}  exact path={route.path}
                  render = {props=>(
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              }else {
                return <Route key={key}   path={route.path} 
                  render = { props => (
                    <route.component  {...props} routes={route.routes}/>
                  )}
                />
              }
            })
          }

        </div>
      </Router>
    );
  }
}

export default App;
