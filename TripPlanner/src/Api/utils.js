import queryString from 'query-string';
import { API_FUEL, API_FUEL_CLIENT_CREDENTIALS } from './constant';
import { auth } from 'fuelConfig';
/**
 * Stringify value of the path parameter
 * @param param
 * @returns { String } the string representation of 
 *  
 */
export function paramValueToString (param){
    if( param==undefined || param ==null ){
        return '';
    }
    if( param instanceof Date ){
        return param.toJSON();
    }
    return param.toString();
}
/**
 * Build full URL by appending given root endpoint, relative endpoint and path parameter
 * @param {string} basePath API root endpoint
 * @param {string} relativePath Relative endpoint
 * @param {object} pathParams /{xxx-ddd-yy} or {aaa:ddddd-ddddd-ddddd}/
 */
export function buildUrl(basePath,relativePath,pathParams){
    let url='';
    if (relativePath==''){
        url=basePath;
    } else if (!relativePath.match(/^\//)){
        relativePath='/'+relativePath;
        url=basePath+relativePath;
    } else {
        url=basePath+relativePath;
    }

    url=url.replace((/\{([\w-]+)\}/g),(fullMatch,key)=>{
        let value;
        if (pathParams.hasOwnProperty(key)){
            value=this.paramValueToString(pathParams[key])
        } else {
            value = fullMatch
        }
        return encodeURIComponent(value)
    })
    return url;
}


export function isJsonMime( contentType ){
    return Boolean(contentType !=null && contentType.match(/^application\/json(;.*)/i));
}
export function jsonPreferredMime(){}

export function buildAuthorization ( auth ){
    switch (auth.type){
        case 'basic':
            if( auth.clientId || auth.clientSecret ){
                let authStr=auth.clientId+':'+auth.clientSecret
                return 'Basic '+btoa( authStr )
            }
        case 'apiKey':
            if (auth.apiKey){
                if (auth.apiKeyPrefix){
                    return auth.apiKeyPrefix +' '+ auth.apiKey
                } 
                throw new Error('apiKeyPrefix is missing '+auth.type);
            }
        case 'Bearer':
            return 'Bearer '+auth.accessToken
        default:
            throw new Error('Unknown authentication type: '+ auth.type);
    }
}

export function buildQueryStr (data){
    return queryString.stringify(data);
}

export function buildAuthBearerObject(accessToken){
    return {
        type:'Bearer',
        accessToken
    }
}
/**
 * 
 * @param {String} api 
 * @param {String} data Stringify Json object to store access token and other data return from oauth call 
 */
export function setAuth(api,data){
    localStorage.setItem(api,data)
}

export function isAuthenticated(api){

}
/**
 * 
 * @param {string} apiName The api name to be checked if the access token has been stored or expired or not 
 */
export const isConnectingToApi = (apiName) => {
    let api= localStorage.getItem(apiName);
    if ( api === null || api =='undefined'){
        return false;
    }
    let apiObj=JSON.parse(api);
    //let expires_in=new Date(JSON.parse(api).expires_in);
    return Date.now()<apiObj.expires_in? true : false
}
export const getAccessTokenExpiresTime = (issue_at,expire_in )=>{
    return parseInt(issue_at)+(parseInt(expire_in)*1000);
}
export const getBearerToken = (apiName)=>{
    let api= localStorage.getItem(apiName);
    if ( api === null || api =='undefined'){
        return '';
    }
    let apiObj=JSON.parse(api);
    return apiObj.access_token
}

export const createReduxApiMiddlwareMetaObj = (apiName)=>{
    switch(apiName){
        case API_FUEL:
            return {
                type:API_FUEL,
                grand_type:API_FUEL_CLIENT_CREDENTIALS,
                auth:auth
            }
        default:
            return new Object()
    }
}
export const paddingZero=(totalLength,numbersToBePad)=>{
    let str=numbersToBePad.toString()
    if (str.length<totalLength)
    {
        let strOfZeros=''
        for (let i=0;i<totalLength-str.length;i++){
            strOfZeros+='0'
        }
        return strOfZeros+str
    }
    return str
}
export const formatUTCDateTime =( dateTime )=>{
    if (dateTime==undefined){     
        dateTime=new Date();
    }
    return [
        paddingZero(2,dateTime.getUTCDate()),paddingZero(2,dateTime.getUTCMonth()+1),
        dateTime.getUTCFullYear()].join('/')+' '+
       [paddingZero(2,dateTime.getUTCHours()),
        paddingZero(2,dateTime.getUTCMinutes()),
        paddingZero(2,dateTime.getUTCSeconds())].join(':');
}