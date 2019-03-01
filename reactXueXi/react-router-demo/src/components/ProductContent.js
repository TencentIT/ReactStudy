import React, { Component } from 'react';

class ProductContent extends Component {
   constructor(props){
       super(props)

       console.log('我是ProductContent商品组件',props)
   }
    render() {
        return (
            <div>
                我是ProductContent商品组件

                <h1>获取到传递过来的值 {this.props.location.search}</h1>
            </div>
        );
    }
}

export default ProductContent;