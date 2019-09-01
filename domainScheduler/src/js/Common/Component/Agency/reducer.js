import { 
    GET_AGENCIES_SUCCESS, 
    GET_AGENCIES_FAILURE,
    SET_AGENCY_SEARCH_CRITERIA,
    UPDATE_AGENCIES_PAGENUMBER } from './action';

const initialState={
    Agencies:[],
    SearchCriteria:'',
    NextPageNumber:1,
    PageSize:20,
    SelectedAgency:{},
    PagesLoaded:false
}
const agencyInfo = (state=initialState,action) =>{
    switch (action.type){
        case SET_AGENCY_SEARCH_CRITERIA:
            console.log(action.payload)
            return { ...state,SearchCriteria:action.payload }
        case GET_AGENCIES_SUCCESS:
            console.log(action)
            console.log ('On success ', { ...state,Agencies:[...state.Agencies,action.payload],NextPageNumber:state.NextPageNumber++ })
            console.log('payload ',action.payload.length)
            if(action.payload.length!==0){
                return { ...state,Agencies:[...state.Agencies,action.payload],NextPageNumber:state.NextPageNumber++ }
            } else {
                return {...state, PagesLoaded: true}
            }

            
        case GET_AGENCIES_FAILURE:
            console.log(action)
            return state
        case UPDATE_AGENCIES_PAGENUMBER:
            return { ...state,NextPageNumber:state.NextPageNumber++}    
        default:
            return state
    }
}
export default agencyInfo