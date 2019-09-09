import React, { Component } from 'react';

class AgenciesMenu extends Component {
    constructor(props){
        super(props);
        this.searchValue=React.createRef()
    }

    handleSearchValueChange = () =>{
        this.searchValue.current.value=event.target.value;
    }

    searchAgencies = () => {
        let nameToSearch=this.searchValue.current.value
        let criteria='name:"'+nameToSearch+'"';
        console.log(criteria)
    }
   
    render() { 
        return ( 
            <div id="agencies-menu">
                <div id='agencies-menu-search'>
                    <input ref={this.searchValue} 
                           placeholder='Find agencies' 
                           onChange={this.handleSearchValueChange}/>
                    <span className='fa fa-search' onClick={this.searchAgencies}/>
                </div>
            </div> 
        );
    }
}
 
export default AgenciesMenu ;