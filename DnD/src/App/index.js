import React, { Component } from 'react';
import Cart from '../Components/Cart/index';
import Item from '../Components/Item/index';
import items from '../Mock/Data/item';
import Rack from '../Components/Rack';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Shelf from '../Components/Shelf';
class App extends Component {
    state = { items:items }


    handleItemDrop = (id) =>{
        console.log ('droppin',id)
        // let newItems= this.state.items.filter((item)=>{
        //     return item.id!=id
        // })
        // console.log(newItems);
        // this.setState({
        //     items:newItems
        // })
    }

    render() { 
        return ( 
            <div>
                <div className='rackWrapper'>rack
                    <Rack>
                        {this.state.items.map((item)=>{
                           return <Item key={item.id} item={item} handleDrop={this.handleItemDrop}/>
                        })}
                    </Rack>
                </div>
                <div className='shelfWrapper'>shelf
                    <Shelf>
                    {this.state.items.map((item)=>{
                           return <Item key={item.id} item={item} handleDrop={this.handleItemDrop}/>
                        })}
                    </Shelf>
                </div>
                <div className='cartWrapper'>cart
                    <Cart>
                    </Cart>
                </div>
            </div>
         );
    }
}
 
export default DragDropContext(HTML5Backend)(App);