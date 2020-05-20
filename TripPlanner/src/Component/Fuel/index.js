import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action';
import { map } from 'googleConfig';
import appText from 'appText';
import './index.css';
import { TITLE_FUEL_TYPE,TITLE_FUEL_BRAND,BUTTON_REFRESH_ALL_FUEL_PRICES,
    CONTENT_FUEL_TYPE_LIST,
    CONTENT_FUEL_BRAND_LIST,
CONTENT_FUEL_PRICE_LISTVIEW,
CONTENT_FUEL_PRICE_MAPVIEW} from './constant';
import { Navigator } from './Navigator/index';
import OptionList from './OptionList/index';
import ListView from './ListView/index';
import LocationInfo from './LocationInfo';
import { MapView } from './MapView';
export class Fuel extends Component {

    constructor(props){
        super(props);
        this.props.connectToFuelApi();
    }
    componentWillMount(){
       //this.props.showContent(CONTENT_FUEL_PRICE_MAPVIEW)
        //this.getGeoLocation()
        this.initGoogleMap()
    }
    
    createGoogleMapScriptTag = () =>{
        const googleMapScript=document.createElement('script')
        googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${map.apiKey}&libraries=geometry,places,drawing&callback=setGoogleMap`
        googleMapScript.async=true;
        googleMapScript.defer=true;
        window.document.body.appendChild(googleMapScript);
    }
    initGoogleMap = () => {
        window.setGoogleMap=this.setGoogleMap;
        this.createGoogleMapScriptTag()
    }

    setGoogleMap = () =>{
        let map= window.google
        this.props.setGoogleMapObj(map)
    }
    getGeoLocation = () =>{
          navigator.geolocation.getCurrentPosition((result)=>{
           //  console.log(result);
             let location={};
             location.latitude=result.coords.latitude;
             location.longitude=result.coords.longitude;
             location.accuracy=result.coords.accuracy;
             this.props.initGeolocation(location);
             this.props.showContent(CONTENT_FUEL_PRICE_MAPVIEW)
         })
     }

    setGeoLocation = (location) =>{
        this.props.initGeolocation(location);
        this.props.showContent(CONTENT_FUEL_PRICE_MAPVIEW);
    }
    refreshAllFuelPrices = () =>{
        event.preventDefault();
        this.props.getAllFuelPrices();
    }
    onCancelSelections = () =>{
        this.props.showContent(CONTENT_FUEL_PRICE_LISTVIEW)
    }
    renderContent = () =>{
        let { fueltype,selectedFuelTypes,selectedFuelBrand,brands } = this.props
        switch (this.props.contentObj){
            case CONTENT_FUEL_TYPE_LIST:
                let optionListFuelType=CONTENT_FUEL_TYPE_LIST;
                return <OptionList listType={optionListFuelType}
                                   selectedItems={selectedFuelTypes}
                                   onCancel={this.onCancelSelections}
                                   onUpdate={this.onFuelTypeUpdate}
                                   items={fueltype}
                                   title={TITLE_FUEL_TYPE}
                />
            case CONTENT_FUEL_BRAND_LIST:
                let optionListFuelBrand=CONTENT_FUEL_BRAND_LIST;
                return <OptionList listType={optionListFuelBrand}
                                   selectedItems={selectedFuelBrand}
                                   onCancel={this.onCancelSelections}
                                   onUpdate={this.onFuelBrandUpdate}
                                   items={brands}
                                   title={TITLE_FUEL_BRAND}
                />
            case CONTENT_FUEL_PRICE_LISTVIEW:
                return <ListView/>
            case CONTENT_FUEL_PRICE_MAPVIEW:
                return <MapView location={this.props.locationObj}/>
            default:
                return <LocationInfo googleMap={this.props.googleMap}   
                                     setLocation={this.setGeoLocation}
                                     />
        }
    }

    onFuelTypeUpdate = (fuelTypes)=>{
        this.props.updateSelectedFuelTypes(fuelTypes)
        this.props.showContent(CONTENT_FUEL_PRICE_LISTVIEW)
    }
    onFuelBrandUpdate = (brand)=>{
        this.props.updateSelectedFuelBrand(brand)
        this.props.showContent(CONTENT_FUEL_PRICE_LISTVIEW)
    }
    render() {
        let { locationObj } = this.props
        return (
            <div>
                <div className='fuel-header'>
                 <button onClick={this.refreshAllFuelPrices}>{BUTTON_REFRESH_ALL_FUEL_PRICES}</button>
                </div>
                
                <div className='fuel-content'>
                    {this.renderContent()}
                </div>
                <div className='fuel-footer'>
                   { locationObj && <Navigator showContent={this.props.showContent}/>}
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fueltype:state.fuel.availableFuelTypes,
    selectedFuelTypes:state.fuel.selectedFuelTypes,
    brands:state.fuel.availableStationBrand,
    selectedFuelBrand:state.fuel.selectedFuelBrand,
    contentObj:state.fuel.contentObj,
    locationObj:state.fuel.locationObj,
    googleMap:state.fuel.googleMap,
})



export default connect(mapStateToProps, actions)(Fuel)
