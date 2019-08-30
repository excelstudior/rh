import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
class Agencies extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='agenciesWrapper'>
                {/* Filters */}
                Agencies
                <div id="menu"></div>
                <div id="agencies-list-fixed-header"></div>
                {/* Pagination */}
            </div>
         )
    }
}

const mapStateToProps= (state) => {

}
const mapDispatchToProps = (dispatch) =>{

}
 
export default connect()(Agencies);