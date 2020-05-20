import axios from 'axios';
import { isConnectingToApi, getBearerToken, formatUTCDateTime, buildAuthBearerObject, createReduxApiMiddlwareMetaObj } from '../../Api/utils';
import { FUEL_AUTH_URL} from 'apiEndpoints';
import { callApi } from '../../Api/index';
import { auth } from 'fuelConfig';
import { API_FUEL,API_FUEL_CLIENT_CREDENTIALS, API_FUEL_HEADER_CONTENTTYPE, API_POSTCODE } from '../../Api/constant';
import { FUEL_BASEPATH, FUEL_GET_ALL_FUEL_PRICES, 
    // POSTCODE_API_ROOT, POSTCODE_API_SUBURBS 
} from '../../Api/endPoints';
import { buildFuelApiCommonHeaderObject } from './util';
import { SHOW_CONTENT, GET_SUBURBS_LOCATION_INFO_REQUEST, GET_SUBURBS_LOCATION_INFO_SUCCESS, GET_SUBURBS_LOCATION_INFO_FAILURE, SET_GOOGLE_MAP, SET_GOOGLE_MAP_AUTOCOMPLETE} from "./constant";
import { GET_ALL_FUEL_PRICES_REQUEST, 
    GET_ALL_FUEL_PRICES_SUCCESS, 
    GET_ALL_FUEL_PRICES_FAILURE, 
    CONNECT_FUEL_API_SUCCESS, 
    CONNECT_FUEL_API_FAILURE, 
    CONNECT_FUEL_API_REQUEST, 
    UPDATE_SELECTED_FUEL_TYPES,
    UPDATE_SELECTED_FUEL_BRAND,
    INIT_GEOLOCATION
    } from './constant';
import { Autocomplete } from '@react-google-maps/api';


// API related functions
export const connectToFuelApi =()=>{
    if (!isConnectingToApi(API_FUEL) ){
        let queryParams={
            grant_type: API_FUEL_CLIENT_CREDENTIALS,
        }
        let basePath=FUEL_AUTH_URL;
        let relativePath='';
        let pathParams={};
        let authObject=auth;
        let httpMethod='GET'; 
        let data=queryParams; 
        let accept='application/json;application/xml'; 
        let contentType =null; 
        let headers={};
        let types=[
            CONNECT_FUEL_API_REQUEST,
            CONNECT_FUEL_API_SUCCESS,
            CONNECT_FUEL_API_FAILURE
        ]
        
        return function (dispatch){
            return dispatch(callApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types))
        }
    } else{
        return  (dispatch)=>{dispatch(updateAuthenticationStatus())}
    }
}

export const updateAuthenticationStatus = ()=>({
    type:CONNECT_FUEL_API_SUCCESS
})

// APP functions
export const updateSelectedFuelTypes = (fuelType) =>({
    type:UPDATE_SELECTED_FUEL_TYPES,
    payload:fuelType
})
export const updateSelectedFuelBrand = (brands) =>({
    type:UPDATE_SELECTED_FUEL_BRAND,
    payload:brands
})

//OFFICAL FUEL API calls
export const getAllFuelPrices = ()=>{
    let token=getBearerToken(API_FUEL);//need to move to token middleware
    
        let meta=createReduxApiMiddlwareMetaObj(API_FUEL)
        let basePath=FUEL_BASEPATH;
        let relativePath=FUEL_GET_ALL_FUEL_PRICES;
        let pathParams={};
        let authObject=buildAuthBearerObject(token);
        let httpMethod='GET'; 
        let data=null;
        let accept='application/json;application/xml'; 
        let contentType = API_FUEL_HEADER_CONTENTTYPE; 
        let headers=buildFuelApiCommonHeaderObject(auth.clientId,111,formatUTCDateTime());
        let types=[
            { type:GET_ALL_FUEL_PRICES_REQUEST,meta},
            GET_ALL_FUEL_PRICES_SUCCESS,
            GET_ALL_FUEL_PRICES_FAILURE
        ]
       
        return function (dispatch){
            return dispatch(callApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types))
        }
    
}

export const showContent = (content)=>({
    type:SHOW_CONTENT,
    payload:content
})

export const initGeolocation = (location) =>({
    type:INIT_GEOLOCATION,
    payload:location
})
//Google Address API 
export const setGoogleMapObj = ( map ) =>({
    type:SET_GOOGLE_MAP,
    payload:map
})
