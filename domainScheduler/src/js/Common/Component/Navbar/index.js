import React, { Component } from 'react';
import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connect } from 'react-redux';
import { connectToDomain,disconnectToDomain } from './action';
import { getAgencies, setAgencySearchCriteria } from '../Agency/action';
import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';

const ApiSwitch = ({image,OnClick})  => {
    return (
        <li className='menuItem'><img src={image} onClick={OnClick}></img></li>
    )
}


class Navbar extends Component {
    constructor(props){
        super(props);
        this.agentNameToSearch=React.createRef();
    }
    // shouldComponentUpdate(){

    // }

    handleAgentNameToSearchChange = () =>{
        this.agentNameToSearch.current.value=event.target.value
    }
    searchAgentByName =()=>{
        let agentName=this.agentNameToSearch.current.value
        let criteria='name:"'+agentName+'"';
        this.props.searchAgentByName(criteria)
    }

    render() { 
        const { domain,connectToDomainApi,disconnectToDomainApi}=this.props
        return ( 
            <div id="navbarWrapper">
                <div id="narbar">
                    <div id="logo"></div>
                    <h1 id='brand'>Inspection Planner</h1>
                    <div>
                        <ul id='menu'>
                            <li className='menuItem'>
                                <input ref={this.agentNameToSearch} 
                                       placeholder='Find agencies' 
                                       onChange={this.handleAgentNameToSearchChange}/>
                                <span className='fa fa-search' onClick={this.searchAgentByName}></span>
                            </li>
                            {domain
                            ?<ApiSwitch image={apiOn} OnClick={disconnectToDomainApi}/>
                            :<ApiSwitch image={api} OnClick={connectToDomainApi}/>}
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
        domain:state.navbar.domain,
        agentInfo:state.agentInfo
    }
}

const mapDispatchToProps = (dispatch) =>({
    connectToDomainApi:()=>dispatch(connectToDomain(DOMAIN)),
    disconnectToDomainApi:()=>dispatch(disconnectToDomain(DOMAIN)),
    searchAgentByName:(criteria)=>{
        dispatch(setAgencySearchCriteria(criteria))
        dispatch(getAgencies(criteria))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);