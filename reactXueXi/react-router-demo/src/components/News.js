import React, { Component } from "react";
import {Link } from "react-router-dom";

class News extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          id: 1,
          title: "我是新闻1"
        },
        {
          id: 2,
          title: "我是新闻2"
        },
        {
          id: 3,
          title: "我是新闻3"
        },
        {
          id: 4,
          title: "我是新闻4"
        }
      ]
    };
  }
  render() {
    return (
        <div>
            <ul>
                {
                    this.state.list.map((item,key)=>{
                       return (
                           <Link to={`/content/${item.id}`}  key={key}>
                                <li key={key}>{item.title}</li>
                            </Link>
                         
                       )
                    })
                }
            </ul>
        </div>
    );
  }
}

export default News;
