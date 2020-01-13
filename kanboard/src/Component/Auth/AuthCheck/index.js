import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter,Redirect } from 'react-router';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../../Util/tool';


class AuthCheck extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.delay=null
    }

    componentDidMount(){
        if ( !isAuthenticated()){
           this.delay=setTimeout(() => {
                this.props.history.replace('/Login');
           }, 2000);
        } else {
            this.delay=setTimeout(() => {
                this.props.history.replace('/Dashboard');
           }, 2000);
        }
    }
    componentWillUnmount(){
        clearTimeout(this.delay)
    }


    render() {
        let { isAuthenticated } = this.props.auth;
        return (
            <div>Authentication checking...</div>
        );
    }
}

AuthCheck.propTypes = {
    auth:PropTypes.object.isRequired
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AuthCheck));

