
import { saveFuelApiAuthenticationObject, buildUniquePropertyValue } from "./reducerHelper"
import { CONNECT_FUEL_API_SUCCESS, GET_ALL_FUEL_PRICES_FAILURE, GET_ALL_FUEL_PRICES_SUCCESS, UPDATE_SELECTED_FUEL_TYPES, SELECT_ALL_FUEL_TYPES, UPDATE_SELECTED_FUEL_BRAND } from "./constant"

const initState={
    isAuthenticated:false,
    stationCode:'',
    suburb:'',
    postcode:'',
    selectedFuelTypes:[],
    selectedFuelBrand:[],
    availableStationBrand:["United", "Caltex", "Metro Fuel", "BP", "Shell", "Caltex Woolworths", "Mobil", "Independent", "Puma Energy", "7-Eleven", "Enhance", "Westside", "Lowes", "Liberty", "Coles Express", "Costco", "Speedway", "Budget", "NRMA", "South West", "Prime Petroleum", "Inland Petroleum", "Matilda", "Tesla"],
    availableFuelTypes:["DL", "E10", "P95", "P98", "U91", "LPG", "PDL", "E85", "B20", "EV"]
}

const fuel = (state=initState,action)=>{
    switch (action.type){
        case CONNECT_FUEL_API_SUCCESS:
            if (action.payload !=undefined){
                saveFuelApiAuthenticationObject(action.payload)
            }
            
            return { ...state,isAuthenticated:true }    
        case GET_ALL_FUEL_PRICES_FAILURE:
            //need to put fail popup
            console.log('Fail')
            return { ...state}
        case GET_ALL_FUEL_PRICES_SUCCESS:
            console.log(action.payload)
            let availableFuelTypes=buildUniquePropertyValue(action.payload.prices,'fueltype');
            let availableStationBrand=buildUniquePropertyValue(action.payload.stations,'brand');
            return { ...state,availableFuelTypes,availableStationBrand }
        case UPDATE_SELECTED_FUEL_TYPES:
            let fuelType=action.payload;
            return { ...state,selectedFuelTypes:fuelType }
        case UPDATE_SELECTED_FUEL_BRAND:
            let brands=action.payload;
            return { ...state,selectedFuelBrand:brands }
            
        default:
            return state
    }
    
}
export default fuel