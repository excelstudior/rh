import React, { Component } from 'react';   
import { connect } from 'react-redux';
import Spinner from '../../Common/Spinner/spinner';
import './agencyDetails.css';
import '../../../../app.css';
class AgencyDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            show:'none'
        }
    }

    shouldComponentUpdate(nextProp,nextState){
        //nextProp.agencyInfo.SelectedAgency !=this.props.agencyInfo.SelectedAgency || 
        console.log(nextProp.agencyInfo.LoadingAgencyDetails);
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
        console.log('loading...',LoadingAgencyDetails)
        return ( 
            <div className='stick' style={{"display":show}}>
            {/* //</div><div> */}
                {LoadingAgencyDetails?<Spinner width={100} height={100}/>:
                <div id='agencyDetails'
                     className='clearfix' >
                    AgencyDetails
                    <span className='closeButton' onClick={this.Close}/>
                </div>}
            </div>
            
         );

        }
    }

export default AgencyDetails;