import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Common/Card/Card';
class AgentCard extends Component {
    
    render() { 
        let {imagePath,firstName,lastName}=this.props
        return (
            <div className='agentCard'>
                <Card>
                <img src={imagePath}></img>
                <span>{firstName}</span>
                <span>{lastName}</span>
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