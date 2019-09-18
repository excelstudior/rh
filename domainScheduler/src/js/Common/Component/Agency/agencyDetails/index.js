import React, { Component } from 'react';   
import { connect } from 'react-redux';
import './agencyDetails.css';
class AgencyDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            show:'none'
        }
    }

    shouldComponentUpdate(nextProp,nextState){
        
        if ( nextProp.agencyInfo.SelectedAgency !=this.props.agencyInfo.SelectedAgency ){
            this.setState({
                show:'block'
            })
        };
        return true
    }
    // state = {  }
    render() { 
        let {show} =this.state;
        return ( 
            <div id='agencyDetails' style={{"display":show}}>AgencyDetails</div>
         );

        }
    }

export default AgencyDetails;