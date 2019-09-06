import React, { Component } from 'react';
import Bar from './bar';

class Agency extends Component {
    shouldComponentUpdate(nextProp,nextState){
        return nextProp.name !=this.props.name
    }
    render() { 
        let { name, address1 , address2 , suburb , state , telephone , email 
            ,agencyId , numberForSale, numberForRent, numberSoldInLast3Months
             } = this.props
        address2 = address2 != ''?
                    address2+' ' : ''
        const address=address1+' '+ address2 + suburb + ' ' + state
        return ( 
            <div className='agency-item'> 
                <div className='agency-contact'>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                        <i className="fa fa-address-card "></i>
                        <p>{address}</p>
                    </div>
                    <div>
                        <i className="fa fa-phone "></i>
                        <p>{telephone != null ? telephone.trim():''}</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope "></i>
                        <p>{email}</p>
                    </div>
                </div>
                <div className='agency-link'>
                    <a>Link2</a>
                    <a>Link1</a>
                </div>
                <div className='agency-pulse'>
                    <Bar legend='For Sale'
                         parentClass='agency-pulse-item'
                         barClass='barchart-bar sale'
                         amount={numberForSale}
                         />
                    <Bar legend='For Rent'
                         parentClass='agency-pulse-item'
                         barClass='barchart-bar rent'
                         amount={numberForRent}
                         />
                    <Bar legend='-3M Sold'
                         parentClass='agency-pulse-item'
                         barClass='barchart-bar sold'
                         amount={numberSoldInLast3Months}
                         />
                </div>
                
                
            </div>
         )
    }
}
 
export default Agency;