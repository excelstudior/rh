import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Common/Card/Card';
import './agentCard.css';
class AgentCard extends Component {
    
    render() { 
        let {imagePath,firstName,lastName}=this.props
        return (
            <div className='agentCard'>
                <Card>
                <img className='agentCard-img' src={imagePath}></img>
                <span className='agentCard-firstName'>{firstName}</span>
                <span className='agentCard-lastName'>{lastName}</span>
                </Card>
            </div> 
            
         )
    }
}

AgentCard.propTypes={
    imagePath:PropTypes.string,
    firstName:PropTypes.string,
    lastName:PropTypes.string
}
export default AgentCard;