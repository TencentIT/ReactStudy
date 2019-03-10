import React, { Component } from 'react';
import { Link } from "react-router-dom";
import fetchJsonp from 'fetch-jsonp'


class Pcontent extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:{},
            domain: "http://a.itying.com/"
        }
       
    }   
    componentWillMount(){
        this.getMsg()
    }
    componentDidMount(){
        // this.getMsg()
    }
    getMsg(){
        let id =this.props.match.params.id
        let api = 'http://a.itying.com/api/productcontent?id='+id
        let _this = this
        fetchJsonp(api)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
                _this.setState({
                    list : json.result[0]
                })
                console.log(_this.state.list)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
    render() {
        return (
            <div >
                 <div className="p_content">		
                    <div className="p_info">				
                        {/* 做个判断，如果图片存在 就显示，不存在就显示空，这样就解决了图片不存在时候报错404的问题
                            为什么会存在进入商品详情页面，图片404 undefined的问题，这个主要还是与react渲染机制有关，
                            首先是 componentWillMount => render => componentDidMount 
                            因为 先是执行  componentWillMount阶段，这个阶段里面，没有请求到数据，然后就执行了render ，此时图片URL是没有值的
                            所以会报错 404 this.state.list.img_url undefined 的问题
                            即使 在 componentWillMount 里面执行 调用接口的函数，也是会报错 图片URL 404 的问题，
                            由于 componentWillMount 渲染太快，render里面取不到数据，所以一般还是 在componentDidMount 里面执行 调用接口函数
                            解决图]图片URL 404 的问题，最好的解决办法是 对URL做个判断，有数据的话 显示，没有数据的话 显示 ‘’ 空字符串 
                            {this.state.list.img_url? <img src={`${this.state.domain}${this.state.list.img_url}`}></img> : '' }		
                        */}
                          
                        {this.state.list.img_url? <img src={`${this.state.domain}${this.state.list.img_url}`} /> : '' }	    {/* 解决办法 */}	
                      
                        {/* <img src={`${this.state.domain}${this.state.list.img_url}`}></img>     显示图片404 的之前写法 */}
                        <h2>{this.state.title}</h2>				
                        <p className="price">{this.state.list.price}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情					
                        </h3>
                        <div className="p_content"> 
                            <div className="back">  <Link to='/'>返回</Link></div>
                            <p>
                                {this.state.list.description}
                            </p>
                             
                        </div>
                    </div>

                    <footer className="pfooter">
                        <div className="cart">				
                            <strong>数量:</strong>
                            <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                                <input type="text" readOnly="readonly" value="1" name="num" id="num" />>
                            </div>
                            <div className="input_right">+</div>				      
                            </div>								
                        
                        </div>
                
                        <button className="addcart">加入购物车</button>			
                    </footer>
		        </div>
               
            </div>
        );
    }
}

export default Pcontent;