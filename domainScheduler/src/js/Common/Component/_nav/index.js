import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connectToDomain } from './action'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DomainApiConnected:false
        }
    }

    toggleConnectToDomainApi = () =>{
        // if (localStorage.getItem('DomainApi')){
        //     localStorage.removeItem('DomainApi');
        //     this.setState({
        //         DomainApiConnected:false
        //     })
        //     return
        // }
       
        // let props=this.props;
        // let connected=new Promise(function(resolved, rejected){
            this.props.connectDomainApi();
        //     resolved(true);
        // })
        // connected.then(result=>{
        //     this.setState({
        //         DomainApiConnected:result
        //     })
        // })
    }

    render() {
        const apis =this.props.apis
        console.log(apis.domain)
        return (
            <div id="navbarWrapper">
                <div id="narbar">
                    <div id="logo"></div>
                    <h1 id='brand'>House Inspector</h1>
                    <div>
                        <ul id='menu'>
                        <li className='menuItem'><span>{this.props.apis.domain.toString()}</span></li>
                            <li className='menuItem'><span>Schedule</span></li>
                            <li className='menuItem'><a href="">Agents</a></li>
                            <li className='menuItem'><img src={apis.domain?apiOn:api} onClick={this.toggleConnectToDomainApi}></img></li>
                            <li className='menuItem'><span className="fa fa-user"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apis: state.nav.apis
    }
}

const mapStateToDispatch = (dispatch) => ({
        connectDomainApi:()=>dispatch(connectToDomain())
})

export default connect( mapStateToProps,mapStateToDispatch )(NavBar);