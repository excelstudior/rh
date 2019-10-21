import React, { Component } from 'react';   
import { connect } from 'react-redux';
import Spinner from '../../Common/Spinner/spinner';
import './agencyDetails.css';
import '../../../../app.css';
import AgentCard from '../agentCard/agentCard';
import Card from '../../Common/Card/Card'
class AgencyDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            show:'none'
        }
    }

    shouldComponentUpdate(nextProp,nextState){
        if ( nextProp.agencyInfo.LoadingAgencyDetails != this.props.agencyInfo.LoadingAgencyDetails){
            this.setState({
                show:'block'
            })
        };
        return true
    }
    Close = () => {
        this.setState({
            show:'none'
        })
    }
    render() { 
        let {show} =this.state;
        let { LoadingAgencyDetails, SelectedAgency}=this.props.agencyInfo;
        console.log('loading...',SelectedAgency)
        return ( 
            <div className='stick' style={{"display":show}}>
            {/* //</div><div> */}
                {LoadingAgencyDetails &&<Spinner width={100} height={100}/>}
                {Object.keys(SelectedAgency).length !=0 && ! LoadingAgencyDetails
                ?<div className='agencyDetails'
                     className='clearfix' >
                    <p className='agencyDetails-name'>{SelectedAgency.name}</p>
                    <img className='agencyDetails-banner' src={SelectedAgency.profile.agencyBanner}></img>
                    <div className='agentsCards'>
                        {SelectedAgency.agents.map((agent,index)=>{
                            return <AgentCard key={index}
                                         imagePath={agent.photo}
                                         firstName={agent.firstName}
                                         lastName={agent.lastName}
                            />
                        })}
                    </div>
                    
                    <span className='closeButton' onClick={this.Close}/>
                </div>
                :<p>Loading ... </p>}
            </div>
            
         );

        }
    }

export default AgencyDetails;