import { RSAA } from 'redux-api-middleware';
import { buildUrl, buildAuthorization, buildQueryStr } from './utils';

export function callApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types) {
    return function (dispatch) {
        //dispath other actions before api call 
        return dispatch(asyncCallApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types)
                //.then( dispatch other actions after api call)
        )
    }
}
/**
 * 
 * @param {string} basePath API root endpoint
 * @param {string} relativePath Relative endpoint
 * @param {Object} pathParams /{xxx-ddd-yy} or {aaa:ddddd-ddddd-ddddd}/
 * @param {Object} authObject Auth object of different authentication method
 * @param {string} httpMethod Http methods 
 * @param {Object} data Can be body data or query params data. query param will be stringigy by 'query-string'
 * @param {String} accept Accepted content type
 * @param {String} contentType Send content type
  * @param {Array} types Redux-api-middleware types 
 */
export function asyncCallApi(basePath,relativePath,pathParams,authObject,httpMethod,data,accept,contentType,headers,types){
    let rass={}; 
    let newHeaders=headers || {};
    // {
    //     'Access-Control-Allow-Origin':'*'
    // };
    let url=buildUrl(basePath,relativePath,pathParams);
    let authorization=buildAuthorization( authObject );
    
    rass.method=httpMethod;
    rass.types=types;
    
    newHeaders.Authorization=authorization;
   // newHeaders[Access-Control-Allow-Origin]= "*";
    if(accept!=null){
        newHeaders.Accept=accept
    };
    if (contentType!=null){
        newHeaders['Content-Type']=contentType
    };
    
    rass.headers=newHeaders;
    
    if (httpMethod=='POST'||httpMethod=='PUT'){
        rass.endpoint=url;
        rass.body=JSON.stringify(data);
    } else if (httpMethod=='GET'&& data !=null){
        let endpoint=url+'?'+buildQueryStr(data);
        rass.endpoint=endpoint;
    } else {
        rass.endpoint=url;
    }

    // rass["Access-Control-Allow-Origin"]= "*",
    console.log(rass)
    return {[RSAA]:rass}
}