import React, { Component } from 'react';
import './index.css';
import Modal from '../index';
import { connect } from 'react-redux';
import {  closeAgencyModal } from './action';

class ModalAgency extends Component {
    render() { 
        let { title,message,closeModal } = this.props.agencyInfo.modal;
        
        console.log (this.props.closeModal);
        return ( 
            <Modal title={title} message={message} onModalClose={this.props.closeModal}/>
         );
    }
}

const mapStateToProps= (state) => {
    return {
        agencyInfo:state.agencyInfo
    }
}
const mapDispatchToProps = ( dispatch ) =>({
    closeModal:() => dispatch ( closeAgencyModal() )
})
 
export default connect(mapStateToProps,mapDispatchToProps)(ModalAgency);