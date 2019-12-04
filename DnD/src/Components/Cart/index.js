import React, { Component } from 'react';

class Cart extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className='cart'>
                <ul className='list'>
                    {this.props.children}
                </ul>
            </div>
         );
    }
}
 
export default Cart;