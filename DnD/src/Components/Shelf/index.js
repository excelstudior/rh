import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import * as Type from '../constant';

function collect (connect, monitor) {
    console.log('monitor',monitor)
    return {
        connectDropTarget:connect.dropTarget(),
        hovered:monitor.isOver(),
       // item:monitor.getItem()
    }
}

class Shelf extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const { connectDropTarget,item } = this.props;
        return connectDropTarget ( 
            <div className='shelf'>
                <ul className='list'>
                    {this.props.children}
                </ul>
            </div>
         );
    }
}
 
export default DropTarget(Type.TYPE_ITEM,{},collect)(Shelf);