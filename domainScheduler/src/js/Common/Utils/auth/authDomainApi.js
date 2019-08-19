import axios from 'axios';
import querystring from 'querystring';
import { DOMAIN_AUTH_URL, DOMAIN_AUTH_GRANT_TYPE, DOMAIN_AUTH_SCOPE } from '../../Apis/domain';

export const getDomainAccessToken = ( clientId, secret, onSuccess, onError )=>{
    const data = querystring.stringify({
        grant_type: DOMAIN_AUTH_GRANT_TYPE,
        scope: DOMAIN_AUTH_SCOPE
    });
    return axios.post(DOMAIN_AUTH_URL, data, {
        headers: {
            'Authorization': `Basic ${base64(`${clientId}:${secret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(result => onSuccess(result))
      .catch(err => onError(err.response.data))
}

const base64 = (str) => {
    return Buffer.from(str).toString('base64')
}
export const signInDomainSuccess = (result) => {
    const { access_token } = result.data;
        //store your access_token for authenticating your API calls
    console.log(access_token);
}
export const signInDomainError = (error) => {
    console.error(error.response.data)
}