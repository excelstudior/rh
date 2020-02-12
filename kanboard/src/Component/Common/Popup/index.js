import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './action'; 
import './index.css'
import { POPUP_TYPE_ERROR,POPUP_TYPE_INFO } from './constant';

class Popup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.popup=React.createRef()
        
    }
    getPopupStyling = (type,position) =>{
        return 'popup '+type+' '+position;
    }
    renderFooter =() =>{
        switch (this.props.popup.type){
            default: return <br/>
        }
    }
    renderTitle = () =>{
        return  <div className='popup-title'>
                    {this.props.popup.title!=''&& <h6>{popup.title}</h6>}
                    <span onClick={this.props.onPopupClose}>x</span>
                </div>
                                         
    }
    renderPopupContainer = (popup) =>{
        let style=this.getPopupStyling(popup.type,popup.showPosition)
        return(
            <div className={style} >
                {this.renderTitle()}
                <div className='popup-message'><p>{popup.message}</p></div>
                {this.renderFooter()}
            </div>
        )
    }
    render() {
        let { popup }=this.props;
        return  this.renderPopupContainer(popup)
    }
}

Popup.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        popup:state.popup
    };
}

export default connect(mapStateToProps,actions)(Popup);
