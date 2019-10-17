import React, { Component } from 'react';
class CardMenu extends Component {
    render() { 
        return ( 
            <div className='cardMenu'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                {this.props.children}
                </ul>
                
            </div>
         )
    }
}
 
export default CardMenu;