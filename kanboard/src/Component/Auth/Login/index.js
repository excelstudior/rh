import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from './action';
import Popup from '../../Common/Popup/index';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.credential={ username:'',password:''}
    }


    onTextChange = () => {
        let name= event.target.name;
        let value= event.target.value;
        switch(name){
            case 'username':
                this.credential.username = value
                return
            case 'password':
                this.credential.password = value;
                return
            default : return
        }
    }

    handleSubmit = () => {
        event.preventDefault();
        this.props.signIn(this.credential,this.props.history)
    }

    render() {
        return (
            <div>
                <Popup/>
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                    <div>
                        <label>Username</label>
                        <input onChange={this.onTextChange}
                               name='username'
                               type='text'
                               placeholder='Please type your username' />
                    </div>
                    <div>
                        <label>Passwords</label>
                        <input onChange={this.onTextChange}
                               name='password'
                               type='password'
                               placeholder='Please type your passwords'/>
                    </div>
                <button>Log In</button>              
            </form>
            </div>
        );
    }
}


Login.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}
// function mapDispatchToProps(dispatch) {
//     return {
//        signIn:(credential)=>dispatch(actions.signIn(credential))
//     };
// }
export default withRouter(connect(mapStateToProps,actions)(Login));
