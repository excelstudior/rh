import React, { Component } from 'react';
import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connect } from 'react-redux';
import { connectToDomain,disconnectToDomain } from './action';
import { getAgentsByName } from '../Agent/action';
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
    searchAgentByName =()=>{
        let name=this.agentNameToSearch.current.value
        console.log(name);
        this.props.searchAgentByName('Ray White Mascot')
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
                            <li className='menuItem'><span>Schedule</span></li>
                            <li className='menuItem'><a href="">Agents</a></li>
                            <li className='menuItem'>
                                <input ref={this.agentNameToSearch} placeholder='Find an agent' value='YesOrNo'/>
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
    searchAgentByName:(agentName)=>dispatch(getAgentsByName(agentName))
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);