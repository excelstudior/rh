import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './action'; 
import './index.css'
import { POPUP_TYPE_ERROR } from './constant';

class Popup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.popup=React.createRef()
        
    }

    componentDidUpdate(){
        switch(this.props.popup.type){
            case POPUP_TYPE_ERROR:
                this.popup.current.className='popup-error';
        }
    }

    renderFooter =() =>{
        switch (this.props.popup.type){
            default: return <br/>
        }
        // return <div className='popup-buttons'>
        //             <button onClick={this.props.onPopupClose}>close</button>
        //         </div>
    }
    renderTitle = () =>{
        return  <div className='popup-title'>
                    {this.props.popup.title!=''&& <h6>{popup.title}</h6>}
                    <span onClick={this.props.onPopupClose}>x</span>
                </div>
                                         
    }
    render() {
        let { popup }=this.props;
        return  popup.show && (
            <div ref={this.popup} >
                {this.renderTitle()}
                <div className='popup-message'><p>{popup.message}</p></div>
                {this.renderFooter()}
            </div>
        );
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
