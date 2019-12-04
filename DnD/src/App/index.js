import React, { Component } from 'react';
import Cart from '../Components/Cart/index';
import Item from '../Components/Item/index';
import items from '../Mock/Data/item';
import Rack from '../Components/Rack';

class App extends Component {
    //state = { items:items }
    render() { 
        return ( 
            <div>
                <div className='rackWrapper'>rack
                    <Rack>
                        {items.map((item)=>{
                           return <Item key={item.id} name={item.name} />
                        })}
                    </Rack>
                </div>
                <div className='shelfWrapper'>shelf</div>
                <div className='cartWrapper'>cart
                    <Cart>
                    </Cart>
                </div>
            </div>
         );
    }
}
 
export default App;