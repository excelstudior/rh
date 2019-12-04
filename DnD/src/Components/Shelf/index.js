import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className='shelf'>
                <ul className='list'>
                    {this.props.children}
                </ul>
            </div>
         );
    }
}
 
export default Shelf;