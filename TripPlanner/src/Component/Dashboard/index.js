import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MODE_GUEST, MODE_USER } from '../../App/constants';
import TripInfo from './TripInfo/index';
export class DashBoard extends Component {


    renderForGuest = () =>{
        return(
            <div>
            DashBoard Guest
            <TripInfo/>
            </div>
        )
    }

    renderForUser = () =>{
        return(
            <div>
            DashBoard User
            <UserBanner/>
            <TripInfo/>
            </div>
        )
    }

    renderDashboardContent = () =>{
        switch ( this.props.mode ){
            case MODE_GUEST:
                return this.renderForGuest()
            case MODE_USER:
                return this.renderForUser()
            default:
            return (
                <div>
                    Problem signing you in. Mode is empty.
                </div>
            )
        }
    }
    render() {
        return (
            this.renderDashboardContent()
        )
    }
}

const mapStateToProps = (state) => ({
    mode:state.dashboard.mode
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
