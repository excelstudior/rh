import { DOMAIN_ROOT_API,
    DOMAIN_API_VERSION,
    DOMAIN,
    DOMAIN_AGENCIES } from '../../Apis/Domain/Endpoint/domain';
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
export const SET_AGENCIES_SEARCH_PAGENUMBER='SET_AGENCIES_SEARCH_PAGENUMBER';
/**
 * @param {string} criteria 
 * @param {number} pageNumber 
 * @param {number} pageSize 
 * GET /v1/agencies
 * call api with redux api middleware
 */
export const setAgenciesPageNumber = ()=>({
    type:SET_AGENCIES_SEARCH_PAGENUMBER
})
export const getAgencies = (criteria, pageNumber = 1, pageSize = 20) =>{
    let endpoint=DOMAIN_ROOT_API+DOMAIN_API_VERSION+DOMAIN_AGENCIES;
    console.log ('in getAgencies page Number Pass in ',pageNumber)
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
export const resetAgencySearchCriteria = (criteria) =>({
    type:SET_AGENCY_SEARCH_CRITERIA,
    payload:criteria
})