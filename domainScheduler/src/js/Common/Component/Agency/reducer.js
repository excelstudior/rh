import { 
    GET_AGENCIES_SUCCESS, 
    GET_AGENCIES_FAILURE,
    SET_AGENCY_SEARCH_CRITERIA,
    UPDATE_AGENCIES_PAGENUMBER } from './action';

const initialState={
    Agencies:[],
    SearchCriteria:'',
    PageNumber:0,
    PageSize:20,
    SelectedAgency:{}
}
const agencyInfo = (state=initialState,action) =>{
    switch (action.type){
        case SET_AGENCY_SEARCH_CRITERIA:
            console.log(action.payload)
            return { ...state,SearchCriteria:action.payload }
        case GET_AGENCIES_SUCCESS:
            console.log(action)
            return { ...state,Agencies:action.payload }
        case GET_AGENCIES_FAILURE:
            console.log(action)
            return state
        case UPDATE_AGENCIES_PAGENUMBER:
            return { ...state,PageNumber:state.PageNumber++}    
        default:
            return state
    }
}
export default agencyInfo