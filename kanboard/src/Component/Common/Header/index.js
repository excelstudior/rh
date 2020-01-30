import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from './Nav/index';
import Shortcut from './Shortcut/index';
import './index.css';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let { isAuthenticated } = this.props.auth;
        return isAuthenticated && (
            <div className='header  clearfix'>
                <div className='header-left'>
                    <Nav/>
                </div>    
                <div className='header-right'>
                    <Shortcut/>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}
export default connect(mapStateToProps)(Header);
