import { isConnectingToApi, getBearerToken, formatUTCDateTime, buildAuthBearerObject } from '../../Api/utils';
import { FUEL_AUTH_URL} from 'apiEndpoints';
import { callApi } from '../../Api/index';
import { auth } from 'fuelConfig';
import { API_FUEL,API_FUEL_CLIENT_CREDENTIALS, API_FUEL_HEADER_CONTENTTYPE } from '../../Api/constant';
import { FUEL_BASEPATH, FUEL_GET_ALL_FUEL_PRICES } from '../../Api/endPoints';
import { buildFuelApiCommonHeaderObject } from './util';
export const CONNECT_FUEL_API_SUCCESS='CONNECT_FUEL_API_SUCCESS';
export const CONNECT_FUEL_API_REQUEST='CONNECT_FUEL_API_REQUEST';
export const CONNECT_FUEL_API_FAILURE='CONNECT_FUEL_API_FAILURE';
export const SAVE_ALL_FUEL_PRICES_SUCCESS='SAVE_ALL_FUEL_PRICES_SUCCESS';
export const GET_ALL_FUEL_PRICES_SUCCESS='GET_ALL_FUEL_PRICES_SUCCESS';
export const GET_ALL_FUEL_PRICES_REQUEST='GET_ALL_FUEL_PRICES_REQUEST';
export const GET_ALL_FUEL_PRICES_FAILURE='GET_ALL_FUEL_PRICES_FAILURE';
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

export const getAllFuelPrices = ()=>{
    let token=getBearerToken(API_FUEL);//need to move to token middleware
    //console.log(token)
    if (token){
        
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
            GET_ALL_FUEL_PRICES_REQUEST,
            GET_ALL_FUEL_PRICES_SUCCESS,
            GET_ALL_FUEL_PRICES_FAILURE
        ]
        return function (dispatch){
            return dispatch(callApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types))
        }
    } else {
        return (dispatch)=>{
            dispatch({type:GET_ALL_FUEL_PRICES_FAILURE})
        }
    }
    
}