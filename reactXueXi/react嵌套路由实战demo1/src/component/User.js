import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class User extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log(this.props )
    }
    render() {
        return (
            <Router>
                 <div  className='content'>
                    <div className="left">
                            <Link to={'/user/'}> 个人中心</Link>

                            <Link to={'/user/Userinfo'}>用户中心</Link>

                            <Link to={'/user/UserEdit'}>用户编辑</Link>
                    </div>
                    <div className="right">

                        {/* 公司级 写法 通过父子传参，从App.js 传递 ，把 二级路由放到了props里面，在componentWillMount打印this.props
                            就能看到里面有 router.js 里面的信息 二级路由 routes 里面传递过来的属性
                        */}
                        {
                            this.props.routes.map((item,key)=>{
                                return <Route key={key} exact path={item.path} component={item.component}/>
                            })
                        }


                        {/* 最原始的写法 */}
                        {/* <Route path='/user/info' component={Info}/>
                        <Route exact path='/user/' component={Main}/> */}

                    </div>

              
                </div>
            </Router>
           
        );
    }
}

export default User;