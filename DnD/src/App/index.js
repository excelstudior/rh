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


    moveItems = ( dragIndex, hoverIndex ) =>{
        console.log('dragging ', dragIndex )
        console.log('hover', hoverIndex )
    }


    clearShelf = () =>{
        this.setState({
            shelves:[{id:1,items:[]},{id:2,items:[]}]  
        })
    }
    handleDropOnShelf = ( shelfId, item) =>{
        console.log(shelfId,item)
        let updatedShelves=this.state.shelves.map((shelf)=>{
            if (shelf.id == shelfId) {
                if (!(shelf.items.some(item))){
                    shelf.items=[ ...shelf.items, item]
                }
        }
            return shelf
        })
        this.setState({
            shelves:updatedShelves
        })
    }
    handleItemDrop = (sourceId,targetId) =>{
        console.log ('droppin',sourceId)
    }

    render() { 
        return ( 
            <div>
                <div className='rackWrapper'>rack
                    <Rack>
                        {this.state.items.map((item,i)=>{
                           return <Item key={i} 
                                        item={item} 
                                        index={i}
                                        id={item.id}
                                        handleDrop={this.handleItemDrop}
                                        moveItems={this.moveItems}/>
                        })}
                    </Rack>
                </div>
                <div className='shelfWrapper'>
                    <p>Shelf</p>
                    <button onClick={this.clearShelf}>clear shelf</button>
                    {this.state.shelves.map((shelf)=>{
                        let items=shelf.items.map((item,i)=>{
                           return <Item key={i} 
                                        item={item} 
                                        index={i}
                                        id={item.id}
                                        handleDrop={this.handleItemDrop}
                                        moveItems={this.moveItems}/>
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