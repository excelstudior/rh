import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { USERMENU_INFO,USERMENU_SETTINGS,USERMENU_LOGOUT } from './constant';
import Logout from '../../../../Auth/Logout/index';

class UserMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        let initial=this.props.auth.user.charAt(0).toUpperCase();
        return (
            <div className='usermenu'>
                <div className='usermenu-initial'>{initial}</div>
                <div className='usermenu-dropdown'>
                    <ul>
                        <li><i className="fa fa-cog"></i><a>{USERMENU_SETTINGS}</a></li>
                        <li><i className="fa fa-user"></i><span>{USERMENU_INFO}</span></li>
                        <li><i className="fa fa-sign-out"></i><span>{USERMENU_LOGOUT}</span></li>
                        <Logout/>
                    </ul>
                </div>
            </div>
        );
    }
}

UserMenu.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}

export default connect(mapStateToProps)(UserMenu);
