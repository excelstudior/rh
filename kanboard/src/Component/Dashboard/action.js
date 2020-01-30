import {callApi} from '../../Util/Api/index';
import {GET_USER_INFO_FAILED,
        GET_USER_INFO_SUCCESS,
        GET_USER_INFO_REQUEST,
        EL} from '../Auth/constant';

export function getUserPermissions(){
    let endpoint='User/GetUserInfos';
    let method ='GET';
    let data ={};
    let actionTypes =[
        GET_USER_INFO_FAILED,
        GET_USER_INFO_SUCCESS,
        GET_USER_INFO_REQUEST
    ]
    return function(dispath){
        return dispath(callApi(endpoint, method, actionTypes,data, EL))
    }
}