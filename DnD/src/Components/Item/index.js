import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import * as Type from '../constant';


const itemSource = {
    beginDrag(props){
       //console.log ('begin drag')
       //console.log (props)
        return props.item;
    },
    endDrag(props,monitor,component){
        //call a function on parent component
        if (!monitor.didDrop()){
            return 
        }
        props.handleDrop(props.item.id)
    }
}

function collect (connect,monitor) {
    return {
        connectDragSource:connect.dragSource(),
        connectDragPreview:connect.dragPreview(),
        isDragging:monitor.isDragging(),
    }

}

class Item extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() { 
       // console.log (this.props);
        const {isDragging,connectDragSource,item} = this.props;
        let backgroundColor = isDragging ? item.color : '#fff';
        return connectDragSource( 
            <li className='item' vaule={item.id} style={{backgroundColor:backgroundColor}}>
                {item.name}
            </li>
         );
    }
}
 
export default DragSource(Type.TYPE_ITEM,itemSource,collect)(Item);

