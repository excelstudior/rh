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
/**
 * 
 * @param {string} agentName 
 * @param {string} criteria 
 * @param {number} pageNumber 
 * @param {number} pageSize 
 */
export const getAgentsByName = (agentName,criteria,pageNumber,pageSize) =>{
    let endpoint=DOMAIN_ROOT_API+DOMAIN_API_VERSION+'agencies';
    //let criteria=
    let q='name:"'+agentName+'"';
    let data={q:q,
              pageNumber:1,
              pageSize:200}
    let types=[ GET_AGENTS_BY_NAME_REQUEST,
                GET_AGENTS_BY_NAME_SUCCESS,
                GET_AGENTS_BY_NAME_FAILURE ]
    console.log(endpoint)
    console.log(data)
    return callApi(endpoint,'GET',types,data,DOMAIN)
}