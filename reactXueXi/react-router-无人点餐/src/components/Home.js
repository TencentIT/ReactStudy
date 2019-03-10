import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: "http://a.itying.com/"
    };
  }

  requestData = () => {
    let api = this.state.domain + "api/productlist";
    axios
      .get(api)
      .then(response => {
        console.log(response.data.result);

        this.setState({
          list: response.data.result
        });

        console.log(this.state.list);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.requestData();
  }

  render() {
    return (
      <div className="item">
                 <Link to={`/login`}>  跳转到登录界面 </Link>

          {this.state.list.map((item, key) => {
           
              return (
                <div key={key}>
                    <h3 className="item_cate">{item.title}</h3>
                    <ul className="item_list">
                        {
                            item.list.map((value,key2)=>{
                                return (
                                    <li key={key2}>
                                        <Link to={`/product/${value._id}`}>
                                            <div className="inner">
                                                <img src={`${this.state.domain}${value.img_url}`} />
                                                <p className="title">{value.catename}</p>
                                                <p className="price">¥{value.price}</p>
                                            </div>
                                        </Link>
                                       
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
              );
           
          })}
       
      </div>
    );
  }
}

export default Home;
