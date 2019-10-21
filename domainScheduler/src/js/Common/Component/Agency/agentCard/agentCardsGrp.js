import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './agentCard.css'


class AgentCardsGrp extends Component {
    constructor(props){
        super(props);
        this.state={
            currentGroup:0
        }
    }

    onControlClick = (e) =>{
        console.log(e.target.className)
    }
    render() { 
        let { agents } = this.props
        let groupsTotal=Math.ceil(agents.length/3);
        return ( 
            <div className='agentCardsGrp'>
                {groupsTotal}
            <span className='agentCardsGrp-next' onClick={this.onControlClick}>Next</span>
            <span className='agentCardsGrp-prev' onClick={this.onControlClick}>Prev</span>
            <div></div>
            </div>
         );
    }
}

AgentCardsGrp.propTypes={
    agents:PropTypes.array
}

export default AgentCardsGrp;