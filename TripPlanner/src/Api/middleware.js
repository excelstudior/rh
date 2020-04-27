import { RSAA } from "redux-api-middleware";
import axios from 'axios';
import { API_FUEL, API_FUEL_CLIENT_CREDENTIALS } from "./constant";
import { isConnectingToApi, getBearerToken } from "./utils";
import queryString from 'querystring';
import { FUEL_AUTH_URL } from "./endPoints";
import auth from "../Component/Auth/reducer";
import { saveFuelApiAuthenticationObject } from "../Component/Fuel/reducerHelper";
import { CONNECT_FUEL_API_SUCCESS } from "../Component/Fuel/constant";

const tokenMiddleware = store =>{

    return next => action =>{
        console.log(store)
        if (action[RSAA]){
            if (action[RSAA].types[0].meta!=undefined){
                let meta=action[RSAA].types[0].meta
                console.log(meta)
                    switch (meta.type){
                        case API_FUEL:
                            if ( isConnectingToApi(API_FUEL) ){
                                console.log('Connected')
                                return next(action)
                            } else {
                                reconnectFuelApi(meta.auth,store,action,next)
                            }
                            
                        default:
                            return next(action)
                    }
                }
                
            }
        
        return next(action)
    }
}

export default tokenMiddleware

const reconnectFuelApi = (auth,store,action,next)=>{
    connectFuelApiPromise(auth).then(res=>{
        store.dispatch({type:CONNECT_FUEL_API_SUCCESS,payload:res})
    }).then(()=>{
        let token=getBearerToken(API_FUEL);
        action[RSAA].headers['Authorization']=`Bearer ${token}`;
        return next(action)
    })
}

const connectFuelApiPromise = (auth) =>{
    let queryParams={
        grant_type: API_FUEL_CLIENT_CREDENTIALS,
    }
    let credential= auth.clientId+':'+auth.clientSecret;
    //let config = { headers:{Authorization:'Basic '+btoa(credential)}};
    return new Promise((resolve,reject)=>{
        axios.request({
            baseURL:FUEL_AUTH_URL,
            params:queryParams,
            headers:{Authorization:'Basic '+btoa(credential)}})
             .then(response=>{
                 console.log(response.data);
                 resolve(response.data)
             })
             .catch(err=>reject(err))
    })

}