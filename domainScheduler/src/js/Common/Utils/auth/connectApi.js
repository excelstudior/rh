import keys from '../../../../../Configs/keys';
import { getDomainAccessToken } from '../auth/authDomainApi';
import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';

let domainClient=keys.domainClient;
export const connectApi = (api) => {
    switch (api){
        case DOMAIN:
        return getDomainAccessToken( domainClient.client_id, 
                                     domainClient.client_secret, 
                                    )
    }
}