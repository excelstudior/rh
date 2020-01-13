import { USER_SIGN_IN_ERROR,
    USER_SIGN_IN_SUCCESS } from '../constant';
import axios from 'axios';
import queryString from 'query-string';
import { EL_TOKEN_URL,EL_KEY } from 'appConfigs';

export const signIn = (credential) =>{
    let config = { headers:{
                    Authorization:'Basic '+EL_KEY
    }};
    let data = { grant_type:'password',...credential };
    return (dispatch)=>{
        axios.post(EL_TOKEN_URL,queryString.stringify(data),config)
         .then((res)=>{
             saveOauthItem('EL',res.data)
             dispatch(signInSuccess(res.data))
            })
         .catch((err)=>{
             dispatch(signInError())
         });
    }
    
}

const saveOauthItem = ( key,tokens ) =>{
    localStorage.setItem(key,JSON.stringify(tokens));
    return
}
export const signInSuccess = (tokens)=>({
    type:USER_SIGN_IN_SUCCESS,
    payload:tokens,
})
export const signInError = ()=>({
    type:USER_SIGN_IN_ERROR,
})