import React, { Component } from 'react';

class AgenciesMenu extends Component {
    constructor(props){
        super(props);
        this.searchValue=React.createRef()
    }

    handleSearchValueChange = () =>{
        this.searchValue.current.value=event.target.value;
    }

    searchAgenciesByName = () => {
        let nameToSearch=this.searchValue.current.value
        let criteria='name:"'+nameToSearch+'"';
        console.log(criteria, this.props.searchAgencies)
        if ( criteria != this.props.agencyInfo.SearchCriteria ) {
            console.log(criteria)
            this.props.resetAndsearchAgencies(criteria,1)
        } else if ( criteria==this.props.agencyInfo.SearchCriteria 
            && !this.props.agencyInfo.PagesLoaded) {
                let pageNumber=this.props.agencyInfo.NextPageNumber;
                this.props.searchAgencies(criteria,pageNumber)
        }
       // this.props.searchAgencies(criteria)
    }
   
    render() { 
        return ( 
            <div id="agencies-menu">
                <div id='agencies-menu-search'>
                    <input ref={this.searchValue} 
                           placeholder='Search agencies by name' 
                           onChange={this.handleSearchValueChange}/>
                    <span className='fa fa-search' onClick={this.searchAgenciesByName}/>
                </div>
            </div> 
        );
    }
}
 
export default AgenciesMenu ;