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
export const UPDATE_AGENCIES_PAGENUMBER='UPDATE_AGENCIES_PAGENUMBER';
/**
 * @param {string} criteria 
 * @param {number} nextPageNumber 
 * @param {number} pageSize 
 * GET /v1/agencies
 */
export const updateAgenciesPageNumber = ()=>({
    type:UPDATE_AGENCIES_PAGENUMBER
})
export const getAgencies = (criteria, nextPageNumber = 1, pageSize = 20) =>{
    let endpoint=DOMAIN_ROOT_API+DOMAIN_API_VERSION+'agencies';
    console.log ('in getAgencies page Number Pass in ',nextPageNumber)
    let data={ q:criteria,
               PageNumber:nextPageNumber,
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