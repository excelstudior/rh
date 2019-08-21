import React, { Component } from 'react';
import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connect } from 'react-redux';
import { toggleApiSwitch,connectToDomain } from './action';
import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';

class Navbar extends Component {

    // render() { 
    //     const domainConnected=this.props.domain
    //     return ( <div>
    //         This is a Switch
    //         <span>{domainConnected.toString()}</span>
    //         <span onClick={this.props.toggleApiSwitch}>Click</span>
    //         <span onClick={this.props.connectToDomainApi}>Connect to Domain</span>
    //     </div> )
    // }
    render() { 
        const { domain,connectToDomainApi }=this.props
        return ( 
            <div id="navbarWrapper">
                <div id="narbar">
                    <div id="logo"></div>
                    <h1 id='brand'>House Inspector</h1>
                    <div>
                        <ul id='menu'>
                            <li className='menuItem'><span>Schedule</span></li>
                            <li className='menuItem'><a href="">Agents</a></li>
                            <li className='menuItem'><img src={domain?apiOn:api} onClick={connectToDomainApi}></img></li>
                            <li className='menuItem'><span className="fa fa-user"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        domain:state.navbar.domain
    }
}

const mapDispatchToProps = (dispatch) =>({
    toggleApiSwitch:()=>dispatch(toggleApiSwitch()),
    connectToDomainApi:()=>dispatch(connectToDomain(DOMAIN))
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);