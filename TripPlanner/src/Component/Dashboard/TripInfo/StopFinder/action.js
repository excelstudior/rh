import { callApi } from "../../../../Api";
import { TPNSW_BASEPATH,TPNSW_STOPFINDER } from "../../../../Api/endPoints";
import { auth } from 'tpnswConfig';
import { VERSION } from "../../../../Config/tpnsw";

export const STOP_FIND_SUCCESS='STOP_FIND_SUCCESS';
export const STOP_FIND_REQUEST='STOP_FIND_REQUEST';
export const STOP_FIND_FAILURE='STOP_FIND_FAILURE';

export const UPDATE_SEARCH_TEXT='UPDATE_SEARCH_TEXT';
export const CLEAR_SEARCH_TEXT='CLEAR_SEARCH_TEXT';

export const updateSearchText = (text) =>({
    type:UPDATE_SEARCH_TEXT,
    payload:text
})
/*
    'outputFormat': outputFormat,
        'type_sf': typeSf,
        'name_sf': nameSf,
        'coordOutputFormat': coordOutputFormat,
        'anyMaxSizeHitList': opts['anyMaxSizeHitList'],
        'TfNSWSF': opts['tfNSWSF'],
        'version': opts['version']
*/
const createQueryParam =( type_sf,name_sf,TfNSWSF )=>{
    let params={
        outputFormat:'rapidJSON',
        type_sf: type_sf,
        name_sf: name_sf,
        coordOutputFormat: 'EPSG:4326',
        version: VERSION
    }
    if (TfNSWSF){
        params.TfNSWSF=TfNSWSF;
    }
    return params
}

export const findStops = (type_sf,name_sf,TfNSWSF) =>{
    let basePath=TPNSW_BASEPATH; 
    let relativePath=TPNSW_STOPFINDER; 
    let pathParams={}; 
    let authObject=auth.apiKey; 
    let httpMethod='GET'; 
    let data=createQueryParam(type_sf,name_sf,TfNSWSF); 
    let accept='application/json;application/xml'; 
    let contentType =null; 
    let types=[
        STOP_FIND_REQUEST,
        STOP_FIND_SUCCESS,
        STOP_FIND_FAILURE
    ]
    return function (dispatch){
        return dispatch(callApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types))
    }
}
export const clearSearchText = ()=>({
    type:CLEAR_SEARCH_TEXT
})