import axios from 'axios';
import querystring from 'querystring';
import { DOMAIN_AUTH_URL, DOMAIN_AUTH_GRANT_TYPE, DOMAIN_AUTH_SCOPE } from '../../Apis/Domain/Endpoint/domain';

export const getDomainAccessToken = ( clientId, secret )=>{
    const data = querystring.stringify({
        grant_type: DOMAIN_AUTH_GRANT_TYPE,
        scope: DOMAIN_AUTH_SCOPE
    });
    return axios.post(DOMAIN_AUTH_URL, data, {
        headers: {
            'Authorization': `Basic ${base64(`${clientId}:${secret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

}

const base64 = (str) => {
    return Buffer.from(str).toString('base64')
}
