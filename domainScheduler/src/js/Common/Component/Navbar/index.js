import React, { Component } from 'react';
import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connect } from 'react-redux';
import { connectToDomain,disconnectToDomain,is, testGetAgencies } from './action';
import { getAgencies, resetAgencySearchCriteria } from '../Agency/action';
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
    //need to remove
    test=()=>{
        testGetAgencies();
    }
    //need to remove end

    componentDidMount () {
        if ( localStorage.getItem(DOMAIN) != null && this.props.domain === false ) {
            localStorage.removeItem (DOMAIN)
        }
    }
    handleAgentNameToSearchChange = () =>{
        this.agentNameToSearch.current.value=event.target.value
    }
    searchAgentByName =()=>{
        let agentName=this.agentNameToSearch.current.value
        let criteria='name:"'+agentName+'"';
        if (criteria!=this.props.agencyInfo.SearchCriteria){
            this.props.resetCriteriaAndSearchAgencies(criteria,1)
        } else if (criteria==this.props.agencyInfo.SearchCriteria 
                    && !this.props.agencyInfo.PagesLoaded ) {
            let pageNumber=this.props.agencyInfo.NextPageNumber;
            this.props.searchAgentByName(criteria,pageNumber)
        }
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
                            <li className='menuItem'><span className="fa fa-user" onClick={this.test}></span></li>
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
        agencyInfo:state.agencyInfo
    }
}

const mapDispatchToProps = (dispatch) =>({
    connectToDomainApi:()=>dispatch(connectToDomain(DOMAIN)),
    disconnectToDomainApi:()=>dispatch(disconnectToDomain(DOMAIN)),
    searchAgentByName:(criteria,pageNumber)=>{
        // dispatch(resetAgencySearchCriteria(criteria))
        dispatch(getAgencies(criteria,pageNumber))
        //dispatch(getAllAgencies(criteria))
    },
    resetCriteriaAndSearchAgencies:(criteria,pageNumber)=>{
        dispatch(resetAgencySearchCriteria(criteria))
        dispatch(getAgencies(criteria,pageNumber))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);