import { CONNECT_FUEL_API_SUCCESS, CONNECT_FUEL_API_REQUEST, GET_ALL_FUEL_PRICES_FAILURE, GET_ALL_FUEL_PRICES_SUCCESS } from "./action"
import { saveFuelApiAuthenticationObject, buildUniquePropertyValue } from "./reducerHelper"

const initState={
    isAuthenticated:false,
    stationCode:'',
    suburb:'',
    postcode:'',
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
        default:
            return state
    }
    
}
export default fuel