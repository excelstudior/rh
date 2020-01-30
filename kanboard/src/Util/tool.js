import queryString from 'query-string';
import { EL_TOKEN_URL, EL_KEY } from 'appConfigs';
import {EL,USER_SIGN_IN_ERROR} from '../Component/Auth/constant';
import Axios from 'axios';

export const isAuthenticated = (tokens)=>{
   return tokens!=null; 
}

export const hasAuthenticationExpired = (tokens) =>{
   let expires=new Date(JSON.parse(tokens)['.expires'])
   return Date.now() > expires
}

export const signInWithRefreshToken=()=>{
   return new Promise((resolve,reject)=>{
      let errorMessage=USER_SIGN_IN_ERROR
      let tokens=localStorage.getItem(EL);
      if (tokens==null) reject(errorMessage);
      let config = { headers:{
         Authorization:'Basic '+EL_KEY
      }}
      let data = { grant_type:'refresh_token', 
                   refresh_token:JSON.parse(tokens)['refresh_token'],
                   user_name:JSON.parse(tokens)['userName']}
      Axios.post(EL_TOKEN_URL,queryString.stringify(data),config)
           .then(response =>(resolve(response.data)))
           .catch(err=>reject(err))
   })
   
}