import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from './action';
import Popup from '../../Common/Popup/index';
// import PPL from '../../../Asset/Image/ppl_orig.jpg';
import './index.css';
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
            <div className='login'>
                <Popup/>
                <div className='login-wrapper clearfix'>
                    <div className='login-logo'>
                        {/* <img src={PPL}/> */}
                    </div>
                    <div className='login-form'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <fieldset>
                                    <legend>Username</legend>
                                    <input onChange={this.onTextChange}
                                        name='username'
                                        type='text'
                                        />
                                </fieldset>
                                
                            </div>
                            <div>
                                <fieldset>
                                    <legend>Passwords</legend>
                                    <input onChange={this.onTextChange}
                                    name='password'
                                    type='password'
                                    />
                                </fieldset>
                            </div>
                            <div className='login-rememberme'>
                                <div className='flatCbkRememberMe'>
                                    <input onChange={this.onTextChange}
                                        id='cbk-rememberme'
                                        name='rememberme'
                                        type='checkbox'/>
                                        <label htmlFor='cbk-rememberme'></label>
                                        <div></div>
                                </div>
                                <label>Remember Me</label>
                            </div>
                            
                        <button>Log In</button>              
                    </form>
                    </div>
                </div>
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
