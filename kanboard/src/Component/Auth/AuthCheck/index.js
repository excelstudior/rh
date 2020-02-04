import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter,Redirect } from 'react-router';
import { connect } from 'react-redux';
import { isAuthenticated,signInWithRefreshToken,hasAuthenticationExpired } from '../../../Util/tool';
import { signInSuccess } from '../Login/action';
import { EL } from '../constant';


class AuthCheck extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.delay=null
    }

    redirectAfterSignIn = (path,userName) =>{
        this.props.signInSuccess(userName);
        this.props.history.replace(path);
        
    }
    componentDidMount(){
        let tokens=localStorage.getItem(EL);
        if (!isAuthenticated(tokens)){
                this.props.history.replace('/Login');
        } else {
            let expired=hasAuthenticationExpired(tokens);
            if (expired){
                signInWithRefreshToken().then((data)=>{
                let tokens=JSON.stringify(data)
                localStorage.setItem(EL,tokens);
                this.redirectAfterSignIn('/Dashboard',data.userName)
           
            }).catch(err=>{
                this.props.history.replace('/Login');
            })
            } else{
                let tokens=localStorage.getItem(EL);
                tokens=JSON.parse(tokens);
                this.redirectAfterSignIn('/Dashboard',tokens.userName);
               
            }
            
     
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
       signInSuccess:(userName) => dispatch(signInSuccess(userName))
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AuthCheck));

