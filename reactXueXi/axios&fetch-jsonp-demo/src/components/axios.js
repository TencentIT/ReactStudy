import React, { Component } from 'react';
import axios from 'axios'

class Axios     extends Component {
    constructor(props){
        super(props)

        this.state={
            list:[]
        }
    }

    axiosGetMsg = () =>{
        var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'

        axios.get(url).then((res)=>{
            console.log(res)

            this.setState({
                list : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <button onClick ={this.axiosGetMsg}>axios获取数据</button>

                <ul>
                     {
                         this.state.list.map((item,key) => {
                             return (
                                 <li key={key}> {item.title} </li>
                             )
                         })
                     }
                </ul>
            </div>
        );
    }
}

export default Axios;