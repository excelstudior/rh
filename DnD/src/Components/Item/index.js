import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, 
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,} from 'react-dnd';
import * as Type from '../constant';
import flow from 'lodash/flow';


const itemSource = {
    beginDrag(props){
        return {item:props.item,
                index:props.index};
    },
    endDrag(props,monitor,component){
        //call a function on parent component
        if (!monitor.didDrop()){
            return 
        }
        props.handleDrop(props.item.id)
    }
}

function collectSource (connect,monitor) {
    return {
        connectDragSource:connect.dragSource(),
        connectDragPreview:connect.dragPreview(),
        isDragging:monitor.isDragging(),
    }
}

const itemTarget = {
    hover (props,monitor,component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        // console.log( component)
        // console.log( monitor)
        //Element.getBoundingClientRect()
        const hoverBoundingRect = (findDOMNode(
            component,
          )).getBoundingClientRect();
         // console.log(hoverBoundingRect);
        if ( dragIndex == hoverIndex ){
            return;
        } 
        //console.log('dragging ',dragIndex)
        //console.log('hoverring on ',hoverIndex);
        const hoverMiddleY= (hoverBoundingRect.bottom-hoverBoundingRect.top)/2
        const clientOffset= monitor.getClientOffset();
        //console.log(clientOffset,hoverBoundingRect)
        
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;
        if (hoverMiddleY-hoverClientY<0){
            console.log(hoverMiddleY,hoverClientY,hoverMiddleY-hoverClientY,dragIndex,hoverIndex)
        }
        
    }
}

function collectTarget (connect,monitor) {
    return {
        connectDropTarget:connect.dropTarget(),
    
    }

}

class Item extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() { 
        const { isDragging, connectDragSource, connectDropTarget, item } = this.props;
        let backgroundColor = isDragging ? item.color : '#fff';
        console.log(item)
        return( 
            connectDragSource &&
            connectDropTarget &&
            connectDragSource( 
            connectDropTarget(<li className='item' vaule={item.id} style={{backgroundColor:backgroundColor,cursor:'move'}}>
                {item.name}
            </li>)
         ));
    }
}
 
export default flow(
    DragSource(Type.TYPE_ITEM,itemSource,collectSource),
    DropTarget(Type.TYPE_ITEM,itemTarget,collectTarget)
)(Item);
