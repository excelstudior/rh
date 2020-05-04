import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { SELECT_ALL } from './constant';
export class OptionList extends Component {
    constructor(props){
        super(props)
        this.state={
            availableItems:this.props.items,
            checkedItems:[],
            showBody:false,
        }
    }
    componentWillMount(){
        this.setState({
            checkedItems:this.props.selectedItems,           
        })
    }
    getCheckItemsType = (items) =>{
        console.log(items)
        if(items.length==0){return []}
        return items.reduce(function (acc, item) {
            acc.push(item.type)
            return acc
          }, [])
    }
    isAllItemsAreSelected = (items,selectedItems) =>{
        let selectedItemTypes=this.getCheckItemsType(selectedItems);
        for ( let i=0;i<items.length;i++){
            if (selectedItemTypes.indexOf(items[i].type)==-1) return false
        }
        return true
    }
    filterSelectAllOption = () =>{
        let checkedItems=this.getCheckItems();
        if (checkedItems.indexOf(SELECT_ALL)>-1){
            return checkedItems.filter((item)=>{
                if (item != SELECT_ALL) {
                    return item
                }
            })
        }
        return checkedItems
    }
    getAvailableItemsList = () =>{
        let { listType }= this.props;
        let listTypeId=listType.toLowerCase().replace(/_/g,'-')
        let contents=document.getElementById(listTypeId)
        return contents.childNodes;
    }

    /**
     * Structure of the item checkbox is in the following order <input><span><label>, 
     * information of type is saved in for attribute (htmlFor), and name is saved in inner html (innerHTML) 
     */
    getCheckItems = () =>{
        let items = this.getAvailableItemsList();
        let checkedItems=[];
        for ( let i=0;i<items.length;i++){
            let nodes = items[i].childNodes;
            for ( let j=0;j<nodes.length;j++){
                if ( nodes[j].type=='checkbox' && nodes[j].checked){
                    console.log(nodes[j+2].htmlFor,nodes[j+2].innerHTML)
                    checkedItems.push( {type:nodes[j+2].htmlFor,name:nodes[j+2].innerHTML})
                }
            }
        }
        return checkedItems
    }
    onItemCheckedChange=()=>{
        if (event.target.id==SELECT_ALL){
            if (event.target.checked) {
                let availableItems=this.state.availableItems;
                return this.setState({
                    checkedItems:availableItems,
                })
            } else {
                return this.setState({
                    checkedItems:[],
                })  
            }
        }
        let items=this.filterSelectAllOption();
        this.setState({
            checkedItems:items,
        })
    }
    onUpdateChanges = () =>{
        this.props.onUpdate( this.state.checkedItems )
    }
    onCancelChanges =()=>{
        this.props.onCancel()
    }
    render() {
       let { availableItems,checkedItems }= this.state;
       let { listType,title }=this.props
       let listTypeId=listType.toLowerCase().replace(/_/g,'-')
    //Check if all options are selected
       let isAllSelected=this.isAllItemsAreSelected(availableItems,checkedItems);
    // Type is a key of a item object that also acts a identifier of a item object   
       let checkedItemsType=this.getCheckItemsType(checkedItems)
        return (
            <div className='optionList'>
                <div className='optionList-title'>
                  Select {title}
                </div>
                <ul className='optionList-list' id={listTypeId}>
                    {<li className='optioinList-listItem'>
                        <input type='checkbox' checked={isAllSelected} id={SELECT_ALL} onClick={this.onItemCheckedChange}/>
                        <span></span>
                        <label for={SELECT_ALL}>{SELECT_ALL}</label>
                    </li>}
                    {availableItems.map((item)=>{
                        let isSelected=checkedItemsType.indexOf(item.type)>-1;
                        return (<li className='optioinList-listItem'>
                        <input type='checkbox' checked={isSelected} id={item.type} onClick={this.onItemCheckedChange}/>
                        <span></span>
                        <label for={item.type}>{item.name}</label></li>)
                    })}
                </ul>
                <div className='optionList-footer'> 
                    <ul>
                        <li onClick={this.onCancelChanges}>Cancel</li>
                        <li onClick={this.onUpdateChanges }>Update</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionList)
