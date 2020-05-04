import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css';
import { SELECT_ALL } from './constant';


export class MultiSelector extends Component {

    constructor(props){
        super(props)
        this.state={
            availableiItems:this.props.items,
            checkedItems:[],
            showBody:false
        }
    }

    componentWillMount(){
        this.setState({
            checkedItems:this.props.selectedItems
        })
    }
    isAllItemsAreSelected = (items,selectedItems) =>{
       for(let i=0;i<items.length;i++){
           let selectedAll=selectedItems.indexOf(items[i])==-1
           if (selectedAll) return false
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
        let title=this.props.headerTitle;
        if(title == undefined || title == '') { title ='non-titled'} 
        let itemListId='multiselector-itemlist-'+(this.props.headerTitle).toLowerCase().replace(' ','-')
        let contents=document.getElementById(itemListId)
        return contents.childNodes;
    }
    getCheckItems = ()=>{
        let items=this.getAvailableItemsList()
        let checkedItems=[];
        for (let i=0;i<items.length;i++){
            let nodes=items[i].childNodes
            for (let j=0;j<nodes.length;j++){
                if(nodes[j].type=='checkbox' && nodes[j].checked){
                    checkedItems.push(nodes[j].id)
                }
            }
        }
        return checkedItems
    }
    handleBodyShown = () =>{
        this.setState((prevState)=>({
            showBody:!prevState.showBody
        }))
    }
    
    onUpdateChanges =()=>{
        this.props.postCheckItems(this.state.checkedItems)
        this.setState({
            showBody:false
        })
    }
    onCancelChanges = ()=>{
        this.setState({
            checkedItems:this.props.selectedItems,
            showBody:false
        })
       
    }
    onItemCheckedChange=()=>{
        if (event.target.id==SELECT_ALL){
            if (event.target.checked) {
                let availableiItems=this.state.availableiItems;
                return this.setState({
                    checkedItems:availableiItems,
                    
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

    render() {
        let { headerPosition, headerTextOrientation,headerTitle,bodyOffSet }=this.props;
        let { availableiItems,checkedItems,showBody } = this.state;
        let bodyLeftOffset='';
        if (headerTextOrientation == undefined) {
            headerTextOrientation='';
        }
        if (headerPosition=='multiselector-header-left'){
            bodyLeftOffset='multiselector-body-offset-left'
        }
        if (headerPosition=='multiselector-header-top'){
            bodyLeftOffset='multiselector-body-offset-top'
        }
        if (headerPosition=='multiselector-header-bottom'){
            bodyLeftOffset='multiselector-body-offset-bottom'
        }
        let mulselectorItemListId = headerTitle == undefined || headerTitle == ''? headerTitle ='non-titled'
                                                                    :'multiselector-itemlist-'+(headerTitle).toLowerCase().replace(' ','-')
        let isAllSelected=this.isAllItemsAreSelected(availableiItems,checkedItems)
        bodyOffSet=bodyOffSet||''
        return (
            <div className='multiselector'>
                <div className={headerPosition}>
                    <div className={`multiselector-header ${headerTextOrientation}`} onClick={this.handleBodyShown}>
                        {headerTitle}
                    </div>
                    {showBody&&<div className={`multiselector-body ${bodyLeftOffset} ${bodyOffSet}`} >
                        <div className='multiselector-content'>
                            
                            <ul id={mulselectorItemListId}>
                                {isAllSelected?
                                <li className='multiselector-checkbox-container'>
                                    <input type='checkbox' checked id={SELECT_ALL} onClick={this.onItemCheckedChange} />
                                    <label  for={SELECT_ALL}>{SELECT_ALL}</label>  
                                    <span></span>
                                
                                </li>
                                :<li className='multiselector-checkbox-container'> 
                                    <input type='checkbox'  id={SELECT_ALL} onClick={this.onItemCheckedChange} />
                                    <label  for={SELECT_ALL}>{SELECT_ALL}</label>
                                    <span></span>
                                    
                                 </li>
                                }
                                {availableiItems.map((item)=>{
                                    let isSelectedType=checkedItems.indexOf(item)>-1;
                                    if (isSelectedType) {
                                        return <li className='multiselector-checkbox-container'>
                                                    
                                                    <label for={item}>{item}</label>
                                                    <input type='checkbox' checked id={item} onClick={this.onItemCheckedChange}/>
                                                    <span></span>
                                                </li>
                                    } else {
                                        return <li className='multiselector-checkbox-container'>
                                                
                                                <label for={item}>{item}</label>
                                                <input type='checkbox' id={item} onClick={this.onItemCheckedChange}/>
                                                <span></span>
                                    </li>
                                    }
                                })}
                            </ul>
                        </div>
                        <div className='multiselector-footer'>
                          <span onClick={this.onCancelChanges}>Cancel</span>
                          <span onClick={this.onUpdateChanges}>Update</span>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps)(MultiSelector)
