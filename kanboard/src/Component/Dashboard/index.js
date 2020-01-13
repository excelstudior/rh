import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div>Dashboard</div>
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
       
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));
