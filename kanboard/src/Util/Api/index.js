import queryString from 'query-string';
import { RSAA } from 'redux-api-middleware';
import {EL_API_ROOT_URL} from 'appConfigs';
import {EL} from '../../Component/Auth/constant';

function getRootApiURL (apiName){
    switch(apiName){
        case EL:
            return EL_API_ROOT_URL
        default:
        return ''
    }
}

export function callApi(endpoint,method,types,data,apiName) {
    return function (dispatch) {
        //dispath other actions before api call 
        return dispatch(asyncCallApi(endpoint,method,types,data,apiName)
                //.then( dispatch other actions after api call)
        )
    }
}

export function asyncCallApi(endpoint,method,types,data,apiName){
    let token=JSON.parse(localStorage.getItem(apiName))
    let rootURL=getRootApiURL(apiName);
    let body = JSON.stringify(data);
    if (method=='POST' || method=='PUT') {
        return {
            [RSAA]:{
                endpoint:rootURL+'/'+endpoint,
                method:method,
                types:types,
                body:body,
                headers:{
                    Authorization: `Bearer ${token.access_token}`,
                    Accept: 'application/json,application/xml',
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        }
    } else {
        endpoint=endpoint+'?'+queryString.stringify(data);
        return {
            [RSAA]:{
                endpoint:rootURL+'/'+endpoint,
                method:method,
                types:types,
                headers: {
                    Authorization: `Bearer ${token.access_token}`,
                    Accept: 'application/json,application/xml'
                }
            }
        }
    }
}