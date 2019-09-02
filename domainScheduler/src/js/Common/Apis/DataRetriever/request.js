import axios from 'axios';
import * as Endpoint from '../Domain/Endpoint/domain';

function createRequestHeaders () {
    let token=JSON.parse(localStorage.getItem(Endpoint.DOMAIN))
    //****** */ handle error 
    if (!token) { alert( Endpoint.DOMAIN_TIMEOUT ); return }
    let headers= {
        Authorization: `Bearer ${token.access_token}`,
        Accept: 'application/json,application/xml'
    }

    return headers
}

function request(baseURL,method='get',config){
    const instance=axios.create({
        baseURL,
        method,
    })

    let headers=createRequestHeaders();
    config.headers=headers;

    return instance(config)
}
export default request