
import { saveFuelApiAuthenticationObject, buildUniquePropertyValue } from "./reducerHelper";
import * as FuelConstants from './constant';

const initState={
    isAuthenticated:false,
    stationCode:'',
    suburb:'',
    postcode:'',
    selectedFuelTypes:[],
    selectedFuelBrand:[],
    availableStationBrand:[
        {type:FuelConstants.FUEL_BRAND_UNITED, name:"United"}, 
        {type:FuelConstants.FUEL_BRAND_CALTEX, name:"Caltex"}, 
        {type:FuelConstants.FUEL_BRAND_METROFUEL, name:"Metro Fuel"}, 
        {type:FuelConstants.FUEL_BRAND_BP, name:"BP"}, 
        {type:FuelConstants.FUEL_BRAND_SHELL, name:"Shell"}, 
        {type:FuelConstants.FUEL_BRAND_CALTEXWOOLWORTHS, name:"Caltex Woolworths"}, 
        {type:FuelConstants.FUEL_BRAND_MOBIL, name:"Mobil"}, 
        {type:FuelConstants.FUEL_BRAND_INDEPENDENT, name:"Independent"}, 
        {type:FuelConstants.FUEL_BRAND_PUMAENERGY, name:"Puma Energy"}, 
        {type:FuelConstants.FUEL_BRAND_7ELEVEN, name:"7-Eleven"}, 
        {type:FuelConstants.FUEL_BRAND_ENHANCE, name:"Enhance"}, 
        {type:FuelConstants.FUEL_BRAND_WESTSIDE, name:"Westside"}, 
        {type:FuelConstants.FUEL_BRAND_LOWES, name:"Lowes"}, 
        {type:FuelConstants.FUEL_BRAND_LIBERTY, name:"Liberty"}, 
        {type:FuelConstants.FUEL_BRAND_COLESEXPRESS, name:"Coles Express"}, 
        {type:FuelConstants.FUEL_BRAND_COSTCO, name:"Costco"}, 
        {type:FuelConstants.FUEL_BRAND_SPEEDWAY, name:"Speedway"}, 
        {type:FuelConstants.FUEL_BRAND_BUDGET, name:"Budget"}, 
        {type:FuelConstants.FUEL_BRAND_NRMA, name:"NRMA"}, 
        {type:FuelConstants.FUEL_BRAND_SOUTHWEST, name:"South West"}, 
        {type:FuelConstants.FUEL_BRAND_PRIMEPETROLEUM, name:"Prime Petroleum"}, 
        {type:FuelConstants.FUEL_BRAND_INLANDPETROLEUM, name:"Inland Petroleum"}, 
        {type:FuelConstants.FUEL_BRAND_MATILDA, name:"Matilda"}, 
        {type:FuelConstants.FUEL_BRAND_TESLA, name:"Tesla"}],
    availableFuelTypes:[
        {type:FuelConstants.FUEL_TYPE_DL, name:'Diesel'},
        {type:FuelConstants.FUEL_TYPE_E10, name:'Ethanol 94 (E10)'}, 
        {type:FuelConstants.FUEL_TYPE_P95, name:'Premium 95'}, 
        {type:FuelConstants.FUEL_TYPE_P98, name:'Premium 98'}, 
        {type:FuelConstants.FUEL_TYPE_U91, name:'Unleaded 91'}, 
        {type:FuelConstants.FUEL_TYPE_LPG, name:'LPG'}, 
        {type:FuelConstants.FUEL_TYPE_PDL, name:'Premium Diesel'}, 
        {type:FuelConstants.FUEL_TYPE_E85, name:'Ethanol 105 (E85)'}, 
        {type:FuelConstants.FUEL_TYPE_B20, name:'Biodiesel 20'}, 
        {type:FuelConstants.FUEL_TYPE_EV, name:'EV charge'} ],
    contentObj:'',
    locationObj:{latitude:-33.9233684,longitude:151.1847079},
    googleMap:null,
    googleMapAutocomplete:null,
}

const fuel = (state=initState,action)=>{
    switch (action.type){
        case FuelConstants.CONNECT_FUEL_API_SUCCESS:
            if (action.payload !=undefined){
                saveFuelApiAuthenticationObject(action.payload)
            }
            return { ...state,isAuthenticated:true }    
        case FuelConstants.GET_ALL_FUEL_PRICES_FAILURE:
            //need to put fail popup
            console.log('Fail')
            return { ...state}
        case FuelConstants.GET_ALL_FUEL_PRICES_SUCCESS:
            console.log(action.payload)
            let availableFuelTypes=buildUniquePropertyValue(action.payload.prices,'fueltype');
            let availableStationBrand=buildUniquePropertyValue(action.payload.stations,'brand');
            return { ...state,availableFuelTypes,availableStationBrand }
        case FuelConstants.UPDATE_SELECTED_FUEL_TYPES:
            let fuelType=action.payload;
            return { ...state,selectedFuelTypes:fuelType }
        case FuelConstants.UPDATE_SELECTED_FUEL_BRAND:
            let brands=action.payload;
            return { ...state,selectedFuelBrand:brands }
        case FuelConstants.SHOW_CONTENT:
            console.log('showcontent',action)
            return { ...state,contentObj:action.payload }
        case FuelConstants.INIT_GEOLOCATION:
            console.log( 'location', action.payload )
            return { ...state,locationObj: Object.assign(state.locationObj,action.payload)}
        case FuelConstants.GET_SUBURBS_LOCATION_INFO_SUCCESS:
            console.log( 'location info ', action.payload)
            return { ...state }
        case FuelConstants.SET_GOOGLE_MAP:
            return { ...state, googleMap:action.payload}
        default:
            return state
    }
    
}
export default fuel