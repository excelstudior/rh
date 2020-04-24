import React, { Component } from 'react'
import LandingPage from '../LandingPage/index';
import Dashboard from '../Dashboard/index';
import Fuel from '../Fuel/index';
import { MODE_GUEST,MODE_USER, MODE_FUEL } from '../../App/constants';
import { connect } from 'react-redux'

export class Main extends Component {
    renderComponent = (isAuthenticated,mode) =>{
        switch (isAuthenticated){
            case false:{
                if (mode==MODE_GUEST){
                    return <Dashboard/>
                } else if (mode==MODE_FUEL){
                    return <Fuel/>
                } return <LandingPage/>
            }
            default:
            return (
                <LandingPage/>
            )
        }
    }
    render() {
        let isAuthenticated=this.props.isAuthenticated;
        let mode=this.props.mode;
        return (
            <div>
                {this.renderComponent(isAuthenticated,mode)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated,
    mode:state.dashboard.mode
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
