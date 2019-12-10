import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import * as Type from '../constant';

const shelfTarget={
    drop(props,monitor,component){
        let dragItem=monitor.getItem();
        let targetId=component.props.id;
        //console.log(component,props,monitor,item);
        props.handleDrop(targetId,dragItem)
    }
}

function collect (connect, monitor) {
    return {
        connectDropTarget:connect.dropTarget(),
        hovered:monitor.isOver(),
        item:monitor.getItem()
    }
}

class Shelf extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const { connectDropTarget,id } = this.props;
        return connectDropTarget ( 
            <div className='shelf' >
                <ul className='list'>
                    {this.props.children}
                </ul>
            </div>
         );
    }
}
 
export default DropTarget(Type.TYPE_ITEM,shelfTarget,collect)(Shelf);