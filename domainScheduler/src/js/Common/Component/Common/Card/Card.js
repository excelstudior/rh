import React, { Component } from 'react';
import CardMenu from '../CardMenu/CardMenu';
import './card.css';
class Card extends Component {
    render() { 
        return ( 
            <div className='card'>
                {this.props.children}
                <CardMenu/>
            </div>
         )
    }
}
 
export default Card;