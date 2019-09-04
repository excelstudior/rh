import React, { Component } from 'react';
import { connect } from 'react-redux';
import Agency from './agency';
import './index.css';
class Agencies extends Component {
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
                        return  <Agency name={agency.name} key={index}/>
                    })

                   
                })}
                </div>
                
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
const mapDispatchToProps = (dispatch) =>{
}
 
export default connect(mapStateToProps)(Agencies);