import React, { Component } from 'react';
import { connect } from 'react-redux';
import Agency from './agency';
import AgenciesMenu from './agenciesMenu';
import AgencyDetails from './agencyDetails/index';
import DataLoader from '../Common/DataLoader/DataLoader';
import Spinner from '../Common/Spinner/spinner';
import Modal from '../Common/Modal/index';
import AgencyModal from '../Common/Modal/Agency/index';
import './index.css';
import { getAgencies, resetAgencySearchCriteria,getAgencyDetailsById } from './action';
import { scrollToBottom } from '../../Utils/tools';


class Agencies extends Component {

    componentDidMount(){
        document.addEventListener('scroll',this.onScroll)
    }

    componentWillUpdate(nextProps,nextState){
        if (nextProps.agencyInfo.PagesLoaded){
            document.removeEventListener('scroll',this.onScroll)
        } else {
            document.addEventListener('scroll',this.onScroll)
        }
    }
    onScroll = () =>{
        let shouldLoadMoreAgencies = scrollToBottom ();
        shouldLoadMoreAgencies && this.retrieveAgencies();
    }

    retrieveAgencies = () => {
        let { NextPageNumber, SearchCriteria } = this.props.agencyInfo;
        console.log('conn');
        this.props.loadNextPage ( SearchCriteria, NextPageNumber );
    }
    render() { 
        const { agencyInfo, searchAgencies, resetCriteriaAndSearchAgencies,getAgencyDetails }=this.props;
        return ( 
            <div id='agenciesWrapper'>
                {/* Filters */}
                <AgencyModal title='Title' message='new message'/>
                <AgencyDetails agencyInfo={agencyInfo}/>
                <AgenciesMenu agencyInfo={agencyInfo}
                              searchAgencies={searchAgencies} 
                              resetAndsearchAgencies={resetCriteriaAndSearchAgencies}/>
                <div id="agencies-list">
                { agencyInfo.LoadingAgencies? <Spinner width={200} height={200} marginTop={200}/>:''}
                  {agencyInfo.Agencies.map((item,index)=>{
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
                                        agencyId={agency.id}
                                        showAgencyDetails={getAgencyDetails}
                                        />
                    })
                })}
                </div>
                {/* <DataLoader stylingId='agencyLoader'
                            show={!agencyInfo.PagesLoaded && agencyInfo.Agencies.length != 0} 
                            handleOnClick={this.retrieveAgencies} 
                            text='Load more ... '/> */}
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
const mapDispatchToProps = ( dispatch ) =>({
    loadNextPage:( criteria, pageNumber ) => dispatch ( getAgencies ( criteria,pageNumber ) ),
    searchAgencies: ( criteria, pageNumber ) => dispatch ( getAgencies ( criteria,pageNumber ) ),
    resetCriteriaAndSearchAgencies:( criteria,pageNumber )=>{
        dispatch ( resetAgencySearchCriteria( criteria ) )
        dispatch ( getAgencies( criteria, pageNumber ) )
    },
    getAgencyDetails:( agencyId )=>dispatch ( getAgencyDetailsById( agencyId ) )
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Agencies);