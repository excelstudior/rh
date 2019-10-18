import React, { Component } from 'react';
import SolidStar from '../../../../../images/s_star_g_24.png';
import SolidMail from '../../../../../images/s_mail_g_24.png';
import SolidListing from '../../../../../images/s_listing_g_50.png';
import SolidCall from '../../../../../images/s_call_g_24.png';
import './CardMenu.css';
class CardMenu extends Component {
    render() { 
        return ( 
            <div className='cardMenu'>
                <ul>
                    <li><img src={SolidStar}></img></li>
                    <li><img src={SolidMail}></img></li>
                    <li><img src={SolidListing}></img></li>
                    <li><img src={SolidCall}></img></li>
                {this.props.children}
                </ul>
                
            </div>
         )
    }
}
 
export default CardMenu;