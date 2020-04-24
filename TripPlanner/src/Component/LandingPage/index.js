import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignIn from '../Auth/SignIn/index';
import SignUp from '../Auth/SignUp/index';
import * as APPTEXT from 'appText';
import * as actions from './action';
import './index.css';

export class LandingPage extends Component {

    onSignInAsGuest = ( ) =>{
        this.props.updateMode( APPTEXT.MODE_GUEST )
    }

    onModeChange=()=>{
        this.props.updateMode( event.target.id )
    }

    render() {
        console.log(this.props.mode)
        return (
            <div className='landingPage'>
                <div className='landingPage-options'>
                    <h1>{APPTEXT.TITLE}</h1>
                    <div className='landingPage-button'>
                            <span>{APPTEXT.SIGNIN}</span>
                            <span>{APPTEXT.SIGNUP}</span>
                            <span onClick={this.onSignInAsGuest}>{APPTEXT.SIGNINASGUEST}</span>
                            <span id={APPTEXT.MODE_FUEL} onClick={this.onModeChange}>{APPTEXT.FUEL_PRICE_CHECK}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mode:state.dashboard.mode
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, actions)(LandingPage)
