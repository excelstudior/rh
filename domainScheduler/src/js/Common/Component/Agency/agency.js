import React, { Component } from 'react';
class Agency extends Component {
    shouldComponentUpdate(nextProp,nextState){
        return nextProp.name !=this.props.name
    }
    render() { 
        const { name } = this.props
        return ( 
            <div> {name}</div>
         )
    }
}
 
export default Agency;