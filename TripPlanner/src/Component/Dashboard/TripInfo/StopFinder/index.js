import React, { Component } from 'react'
import { connect } from 'react-redux';
import StopList from './StopList/index';
import * as actions from './action';
import axios from 'axios';
import queryString  from 'querystring';
export class StopFinder extends Component {

    test=()=>{
        let str=('FzVqsxByzfAiOfsG0wXWJBymRJQJUZGy:'+'dGYBmdN3PqqRlcim')
        let authstr='Basic '+btoa(str)
        // let authstr='Basic RnpWcXN4Qnl6ZkFpT2ZzRzB3WFdKQnltUkpRSlVaR3k6ZEdZQm1kTjNQcXFSbGNpbQ=='
        let headers={
            // 'Access-Control-Allow-Origin':'*',
            'Authorization':authstr,
            'Accept':'application/json',
            'Content-type':'application/x-www-form-urlencoded'
        };

        let data = queryString.stringify({
            grant_type:'client_credentials'
        })
        axios.get('https://api.onegov.nsw.gov.au/oauth/client_credential/accesstoken'
        ,{params:{ 
            grant_type:'client_credentials'
        },
            headers:headers})
        .then(r=>console.log(r))

        let headers1={
            'Access-Control-Allow-Origin':'https://api.transport.nsw.gov.au',
            'Authorization':'apikey 2MGt8lDiqgluTe9GtWc98SnvQBAyUH3JblRg',
            'Accept':'application/json',
            'Content-type':'application/x-www-form-urlencoded'
        };
        axios({
            method:'get',
            baseURL:'https://api.transport.nsw.gov.au',
            url:'/v1/tp/stop_finder',
            headers:headers1,
            params:{
                outputFormat:'rapidJSON',
            type_sf: 'any',
            name_sf: 'Mascot',
            coordOutputFormat: 'EPSG:4326',
            version: '10.2.1.42'
            }
        }).then((res)=>{
            console.log(res)
        })
    }

    onSearchTextChange = () =>{
        console.log(event.target.value);
        this.props.updateSearchText(event.target.value);
        this.props.findStops('any',event.target.value,false);
        this.test();
        
    }
    clearSearchText = () =>{
        this.props.clearSearchText()
    }

    render() {
        let  {isLoading,stopList,stopFinderSearchText} = this.props.stopFinder;
        return (
            <div>
                StopFinder
                <form>
                    <div>
                        <label>From</label>
                        <input type='text' value={stopFinderSearchText} onChange={this.onSearchTextChange}/>
                        <span onClick={this.clearSearchText}>x</span>
                    </div>
                    {!isLoading && stopList.length !==0 &&<StopList/>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stopFinder:state.stopFinder
})



export default connect(mapStateToProps, actions)(StopFinder)
