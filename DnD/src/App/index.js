import React, { Component } from 'react';
import Cart from '../Components/Cart/index';
import Item from '../Components/Item/index';
import items from '../Mock/Data/item';
import Rack from '../Components/Rack';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Shelf from '../Components/Shelf';
class App extends Component {
    state = { items:items ,
              shelves:[{id:1,items:[]},{id:2,items:[]}]  
            }

    handleDropOnShelf = ( shelfId, item) =>{
        console.log(shelfId,item)
        let updatedShelves=this.state.shelves.map((shelf)=>{
            if (shelf.id == shelfId) {
            shelf.items=[ ...shelf.items, item]
        }
            return shelf
        })
        this.setState({
            shelves:updatedShelves
        })
    }
    handleItemDrop = (sourceId,targetId) =>{
        console.log ('droppin',sourceId)
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
                    {this.state.shelves.map((shelf)=>{
                        let items=shelf.items.map((item)=>{
                            return <Item key={item.id} item={item} handleDrop={this.handleItemDrop}/>
                        })
                       return <Shelf key={shelf.id} id={shelf.id} children={items} handleDrop={this.handleDropOnShelf}/>
                    })}
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