import { DOMAIN_ROOT_API,DOMAIN_API_VERSION,DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { callApi } from '../../Apis/Utils/tool';
/**
 * Connect to Domain Endpoints
 */
/**
 * Search for agency.
 */
export const GET_AGENCIES_REQUEST='GET_AGENCIES_REQUEST';
export const GET_AGENCIES_SUCCESS='GET_AGENCIES_SUCCESS';
export const GET_AGENCIES_FAILURE='GET_AGENCIES_FAILURE';
export const SET_AGENCY_SEARCH_CRITERIA='SET_AGENCY_SEARCH_CRITERIA';
/**
 * @param {string} criteria 
 * @param {number} pageNumber 
 * @param {number} pageSize 
 * GET /v1/agencies
 */
export const getAgencies = (criteria, pageNumber = 0, pageSize = 20) =>{
    let endpoint=DOMAIN_ROOT_API+DOMAIN_API_VERSION+'agencies';
    let data={ q:criteria,
               pageNumber,
               pageSize }
    let types=[ GET_AGENCIES_REQUEST,
                GET_AGENCIES_SUCCESS,
                GET_AGENCIES_FAILURE ]
    return callApi(endpoint,'GET',types,data,DOMAIN)
}

export const getAgencyDetails = () =>{
    
}
export const setAgencySearchCriteria = (criteria) =>({
    type:SET_AGENCY_SEARCH_CRITERIA,
    payload:criteria
})