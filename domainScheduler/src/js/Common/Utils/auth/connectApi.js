import { domainClient } from '../../../../Configs/keys';
import { getDomainAccessToken, signInDomainSuccess, signInDomainError } from '../auth/authDomainApi';
import { DOMAIN } from '../../../Common/Apis/domain';

export const connectApi = (api) => {
    switch (api){
        case DOMAIN:
        return getDomainAccessToken( domainClient.client_id, 
                                     domainClient.client_secret, 
                                     signInDomainSuccess,
                                     signInDomainError )
    }
}