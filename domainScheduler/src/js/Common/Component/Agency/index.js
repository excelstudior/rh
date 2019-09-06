import React, { Component } from 'react';
import { connect } from 'react-redux';
import Agency from './agency';
import DataLoader from '../Common/DataLoader/DataLoader';
import './index.css';
import { getAgencies } from './action';

class Agencies extends Component {

    retrieveAgencies = () => {
        let { NextPageNumber, SearchCriteria } = this.props.agencyInfo;
        console.log('conn');
        this.props.loadNextPage ( SearchCriteria, NextPageNumber );
    }
    render() { 
        const { agencyInfo }=this.props;
        // console.log(agencyInfo)
        return ( 
            <div id='agenciesWrapper'>
                {/* Filters */}
                
                <div id="menu"></div>
                <div id="agencies-list-fixed-header"></div>
                <div id="agencies-list">
                { agencyInfo.Agencies.map((item,index)=>{
                   return item.map((agency,index)=>{
                        return  <Agency name={agency.name} 
                                        suburb={agency.suburb}
                                        state={agency.state}
                                        address1={agency.address1}
                                        address2={agency.address2}
                                        telephone={agency.telephone}
                                        email={agency.email}
                                        numberForSale={agency.numberForSale != undefined ? agency.numberForSale:0}
                                        numberForRent={agency.numberForRent != undefined ? agency.numberForRent:0}
                                        numberSoldInLast3Months={agency.numberSoldInLast3Months != undefined ? agency.numberSoldInLast3Months:0}
                                        key={index}
                                        />
                    })
                })}
                </div>
                <DataLoader stylingId='agencyLoader'
                            show={!agencyInfo.PagesLoaded && agencyInfo.Agencies.length != 0} 
                            handleOnClick={this.retrieveAgencies} 
                            text='Load more ... '/>
                {/* Pagination */}
            </div>
         )
    }
}

const mapStateToProps= (state) => {
    return {
        agencyInfo:state.agencyInfo
    }
}
const mapDispatchToProps = (dispatch) =>({
    loadNextPage:(criteria,pageNumber) => dispatch ( getAgencies (criteria,pageNumber) )     
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Agencies);