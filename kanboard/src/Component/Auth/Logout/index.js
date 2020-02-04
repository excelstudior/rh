import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {EL} from '../constant';
import { USERMENU_LOGOUT } from '../../Common/Header/Shortcut/UserMenu/constant'
import  {logOutSuccess}  from './action';
class Logout extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    handleUserLogout = () =>{
        localStorage.removeItem(EL);
        this.props.logOutSuccess();
        this.props.history.replace('/Login')
        // location.reload();
    }
    render() {
        return (
            <li onClick={this.handleUserLogout}><i className="fa fa-sign-out"></i>
            <span>{USERMENU_LOGOUT}</span>
            </li>
        );
    }
}

Logout.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        logOutSuccess: ()=> dispatch(logOutSuccess()),
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Logout))
