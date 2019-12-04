import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <li classsName='item' vaule={this.props.name}>{this.props.name}</li>
         );
    }
}
 
export default Item;

