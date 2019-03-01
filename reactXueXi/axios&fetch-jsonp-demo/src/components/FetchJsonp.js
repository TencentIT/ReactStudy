import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'


class FetchJsonp extends Component {
    constructor(props){
        super(props)

        this.state = {
            list : []
        }
    }
   

    getFetchJsonp = ()=>{
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        
        fetchJsonp(api)
            .then(function(response) {
                return response.json()
            }).then(function(res) {
                that.setState({
                    list : res.result
                })

                console.log(that.state.list)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

            
    render() {
        return (
           <div>
               <button onClick = {this.getFetchJsonp}>fetch-jsopn获取数据</button>
           </div> 
        );
    }
}

export default FetchJsonp;