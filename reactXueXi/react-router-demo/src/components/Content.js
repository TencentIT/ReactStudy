import React, { Component } from 'react';
import {Link } from "react-router-dom";


class Content extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
        console.log('获取传递过来的ID',this.props.match.params.id)
    }
    render() {
        return (
            <div>
                Content 新闻详情页面
                <Link to ={`/ProductContent?id=${this.props.match.params.id}`}>我是新闻{this.props.match.params.id}</Link>
            </div>
        );
    }
}

export default Content;