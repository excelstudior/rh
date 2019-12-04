import React, { Component } from 'react';

class Rack extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className='rack'>
                <ul className='list'>
                    {this.props.children}
                </ul>
            </div> 
         );
    }
}
 
export default Rack;