import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Common/Header/index';
import { getUserPermissions } from  '../Dashboard/action';

class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props.getUserPermissions();
    }


    render() {
        return (
            <div className='dashboard'>
                {/* <Header/> */}
               I am Dashboard
            </div>
        );
    }
}

Dashboard.propTypes = {
 
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
       getUserPermissions:()=>{dispatch(getUserPermissions())}
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));
