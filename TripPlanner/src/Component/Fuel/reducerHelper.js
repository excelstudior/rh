import { getAccessTokenExpiresTime } from "../../Api/utils";
import { API_FUEL } from "../../Api/constant";
import { getUniqueValuesOfAnArray } from "./util";

export const saveFuelApiAuthenticationObject = (payload) =>{
    let expireTime=getAccessTokenExpiresTime(payload['issued_at'],payload['expires_in']);
    console.log(expireTime)
    payload['expires_in']=expireTime
    localStorage.setItem(API_FUEL,JSON.stringify(payload));
}
// Use for 2 levels arrays, getting property value of the object in second level array
export const buildUniquePropertyValue = (array,property)=>{
    //let prices=action.payload.prices;
            let values=array.map((item,i)=>{
                return item[property]
            })
            console.log(values,values.length)
            let uniqueValues=getUniqueValuesOfAnArray(values)
            console.log(uniqueValues)
            return uniqueValues
}