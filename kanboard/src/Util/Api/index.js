import queryString from 'query-string';
import { RSAA } from 'redux-api-middleware';
//import { DOMAIN_TIMEOUT } from '../Domain/Endpoint/domain';
// export const isConnectingToApi = (apiName) => {
//     let api= localStorage.getItem(apiName);
//     if ( api === null ){
//         return false;
//     }
//     let expires_in=new Date(JSON.parse(api).expires_in);
//     return Date.now()<expires_in.getTime()? true : false
// }

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
    //if token doesn't exists return action that handle timeout
   // if (!token) { return { type : DOMAIN_TIMEOUT } };

    let body = JSON.stringify(data);
    if (method=='POST' || method=='PUT') {
        return {
            [RSAA]:{
                endpoint:endpoint,
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
        endpoint= data != null || data != '' ? 
                 endpoint+'?'+queryString.stringify(data) : endpoint;
        return {
            [RSAA]:{
                endpoint:endpoint,
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