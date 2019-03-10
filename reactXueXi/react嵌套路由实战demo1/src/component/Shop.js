import React, { Component } from "react";
import ShopAdd from "./Shop/ShopAdd";
import ShopList from "./Shop/ShopList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Shop extends Component {
 constructor(props){
     super(props)
     console.log(this.props)
 }
  render() {
    return (
      <Router>
        <div className="content">
          <div className="left">
            <Link to="/shop/">增加商户 </Link>
            <Link to="/shop/shoplist"> 商品列表 </Link>
          </div>
          <div className="right">
            <Route exact path={`${this.props.match.url}/`} component={ShopAdd} />
            <Route path={`${this.props.match.url}/shoplist`} component={ShopList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Shop;
