import React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';

class ModalWrapper extends Component {
    constructor(props){
        super(props)
        this.state={
            show:'modalHide',
            dimensions:null
        }
        this.wrapper=React.createRef();
    }
    shouldComponentUpdate(nextProp,nextState){
        if ( nextProp.message != this.props.message && nextProp.message !==''){
            this.setState({
                show:'modalShow'
            })
            
        };
        return true
    }
    close = () =>{
        if (this.props.onModalClose !=undefined){
            this.props.onModalClose();
        }
        this.setState({
            show:'modalHide'
        })
    }

    renderInner= ()=>{

        let { show, dimensions }=this.state;
        let { title,message,children }=this.props;
        return (
                <div id='modalInner' className={`${show}`}> 
                <div className='modal-content'>
                        {title!==''&& title!==undefined ?<span className='modal-title'>{ title }</span>:''}
                        <p className='modal-message'>{ message }</p>
                </div>
                        
                <div id='modal-btnGroup' >
                    <ul>
                        <li onClick={this.close} id='modal-close'>CLOSE</li>
                            {children}
                    </ul>
                </div>        
                </div>
            
        )
    }

    render() { 
        
        let { show,dimensions }=this.state;
        return (
            <div className='modalWrapper' ref={this.wrapper}>
                {this.renderInner()}
            </div>
        );
    }
}
ModalWrapper.propTypes={
    title:PropTypes.string,
    message:PropTypes.string.isRequired,
    onModalClose:PropTypes.func
}

export default ModalWrapper;