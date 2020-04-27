import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action';
import appText from 'appText';
import MultiSelector from './MultiSelector/index';
import { BUTTON_REFRESH_ALL_FUEL_PRICES 
    ,MULTISELECTOR_HEADER_TITLE_FUEL_TYPE
    ,MULTISELECTOR_HEADER_TITLE_FUEL_BRAND} from './constant';

export class Fuel extends Component {

    constructor(props){
        super(props);
        this.props.connectToFuelApi();
    }
    refreshAllFuelPrices = () =>{
        event.preventDefault();
        this.props.getAllFuelPrices();
    }
    
    onFuelTypeUpdate = (fuelTypes)=>{
        this.props.updateSelectedFuelTypes(fuelTypes)
    }
    onFuelBrandUpdate = (brand)=>{
        this.props.updateSelectedFuelBrand(brand)
    }
    render() {
        let {fueltype,selectedFuelTypes,selectedFuelBrand,brands} = this.props
        return (
            <div>
                Fuel
            <button onClick={this.refreshAllFuelPrices}>{BUTTON_REFRESH_ALL_FUEL_PRICES}</button>
            <MultiSelector headerPosition={'multiselector-header-top'} 
                           headerTitle={MULTISELECTOR_HEADER_TITLE_FUEL_TYPE}
                        //    headerTextOrientation={'multiselector-header-text-v'}
                           items={fueltype}
                           selectedItems={selectedFuelTypes}
                           postCheckItems={this.onFuelTypeUpdate}
                           />
            <MultiSelector headerPosition={'multiselector-header-top'} 
                           headerTitle={MULTISELECTOR_HEADER_TITLE_FUEL_BRAND}
                           items={brands}
                           selectedItems={selectedFuelBrand}
                           postCheckItems={this.onFuelBrandUpdate}
                         />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fueltype:state.fuel.availableFuelTypes,
    selectedFuelTypes:state.fuel.selectedFuelTypes,
    brands:state.fuel.availableStationBrand,
    selectedFuelBrand:state.fuel.selectedFuelBrand
})



export default connect(mapStateToProps, actions)(Fuel)
