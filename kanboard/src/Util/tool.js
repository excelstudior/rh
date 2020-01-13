import queryString from 'query-string';
import {EL} from '../Component/Auth/constant';

export const isAuthenticated = ()=>{
   let tokens=localStorage.getItem(EL);
   if (tokens==null) return false;
   let expires=new Date(JSON.parse(tokens)['.expires'])
   
   return Date.now() < expires
}

export const test=()=>{

}