import React, { Component } from 'react';
class Agency extends Component {
    shouldComponentUpdate(nextProp,nextState){
        return nextProp.name !=this.props.name
    }
    render() { 
        const { name } = this.props
        return ( 
            <div className='agency-item'> 
                <div className='agency-name'>
                   <span>{name}</span>  
                </div>
                <div className='agency-link'>
                    <a><span>Link2</span></a>
                    <a>Link1</a>
                </div>
            </div>
         )
    }
}
 
export default Agency;