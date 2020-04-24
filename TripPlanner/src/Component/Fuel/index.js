import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action';
import appText from 'appText';
import { BUTTON_REFRESH_ALL_FUEL_PRICES } from '../../App/constants';
import MultiSelector from './MultiSelector/index';

export class Fuel extends Component {

constructor(props){
    super(props);
    this.props.connectToFuelApi();
}
    refreshAllFuelPrices = () =>{
        event.preventDefault();
        this.props.getAllFuelPrices();
    }
    render() {
        return (
            <div>
                Fuel
            <button onClick={this.refreshAllFuelPrices}>{BUTTON_REFRESH_ALL_FUEL_PRICES}</button>
            <MultiSelector styling={'multiselector-header-left'}/>
            <MultiSelector styling={'multiselector-header-top'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps, actions)(Fuel)
