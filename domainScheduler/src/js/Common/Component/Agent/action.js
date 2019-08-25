import { DOMAIN_ROOT_API,DOMAIN_API_VERSION,DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { callApi } from '../../Apis/Utils/tool';
import queryString from 'querystring';
/**
 * Connect to Domain Endpoints
 */
/**
 * Search for agents by name.
 */
export const GET_AGENTS_BY_NAME_REQUEST='GET_AGENTS_BY_NAME_REQUEST';
export const GET_AGENTS_BY_NAME_SUCCESS='GET_AGENTS_BY_NAME_SUCCESS';
export const GET_AGENTS_BY_NAME_FAILURE='GET_AGENTS_BY_NAME_FAILURE';
export const getAgentsByName = (agentName) =>{
    let endpoint=DOMAIN_ROOT_API+DOMAIN_API_VERSION+'agencies';
    let q='name:"'+agentName+'"'
    console.log(q)
    let data={q:q}
    let types=[ GET_AGENTS_BY_NAME_REQUEST,
                GET_AGENTS_BY_NAME_SUCCESS,
                GET_AGENTS_BY_NAME_FAILURE ]
    console.log(endpoint)
    return callApi(endpoint,'GET',types,data,DOMAIN)
}