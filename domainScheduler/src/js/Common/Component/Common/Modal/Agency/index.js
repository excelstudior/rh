import React, { Component } from 'react';
import './index.css';
import Modal from '../index';
import { connect } from 'react-redux';
import {  closeAgencyModal } from './action';

class ModalAgency extends Component {
    render() { 
        let { title,message } = this.props.agencyInfo.modal;
        return ( 
            <Modal title={title} message={message} onModalClose={this.props.closeModal}>
                <li>Test</li>
            </Modal>
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