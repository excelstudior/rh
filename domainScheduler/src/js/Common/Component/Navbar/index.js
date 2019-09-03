import React, { Component } from 'react';
import './index.css';
import api from '../../../../images/ApiConnect.png';
import apiOn from '../../../../images/ApiOn.png';
import { connect } from 'react-redux';
import { connectToDomain,disconnectToDomain, testGetAgencies } from './action';
import { getAgencies, resetAgencySearchCriteria, getAllAgencies } from '../Agency/action';
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
    handleAgentNameToSearchChange = () =>{
        this.agentNameToSearch.current.value=event.target.value
    }
    searchAgentByName =()=>{
        if (this.props.agencyInfo.PagesLoaded){
            //need to add some logic to show popup
            return false
        }
        let agentName=this.agentNameToSearch.current.value
        let criteria='name:"'+agentName+'"';
        // console.log(this.props.agencyInfo)
        if (criteria==this.props.agencyInfo.SearchCriteria){
            let pageNumber=this.props.agencyInfo.NextPageNumber;
            this.props.searchAgentByName(criteria,pageNumber)
            return
        } else {
            this.props.resetCriteriaAndSearchAgencies(criteria,1)
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