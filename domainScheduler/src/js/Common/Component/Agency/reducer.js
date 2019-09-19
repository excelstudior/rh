import {
    GET_AGENCIES_REQUEST, 
    GET_AGENCIES_SUCCESS, 
    GET_AGENCIES_FAILURE,
    SET_AGENCY_SEARCH_CRITERIA,
    SET_SELECTED_AGENCY,
    GET_AGENCY_BY_ID_REQUEST,
    GET_AGENCY_BY_ID_SUCCESS
} from './action';

const initialState={
    Agencies:[],
    LoadingAgencies:false,
    SearchCriteria:'',
    NextPageNumber:1,
    PageSize:20,
    SelectedAgency:{},
    LoadingAgencyDetails:false,
    PagesLoaded:false
}
const agencyInfo = (state=initialState,action) =>{
    switch (action.type){
        case SET_AGENCY_SEARCH_CRITERIA:
            return { ...initialState,SearchCriteria:action.payload }
        case SET_SELECTED_AGENCY:
            return { ...state,SelectedAgency: action.payload }
        case GET_AGENCY_BY_ID_REQUEST:
            //console.log(action.payload);
            return { ...state,LoadingAgencyDetails: true }
        case GET_AGENCY_BY_ID_SUCCESS:
            console.log(action.payload);
            return { ...state,SelectedAgency: action.payload,LoadingAgencyDetails: false }
        
        case GET_AGENCIES_REQUEST:
            return { ...state,LoadingAgencies : true}    
        case GET_AGENCIES_SUCCESS:
            // console.log(action)
             console.log ('On success ', { ...state,Agencies:[...state.Agencies,action.payload],NextPageNumber:state.NextPageNumber++ })
            // console.log('payload ',action.payload.length)
            if(action.payload.length!==0){
                return { ...state,LoadingAgencies:false,Agencies:[...state.Agencies,action.payload],NextPageNumber:state.NextPageNumber++ }
            } else {
                return {...state, LoadingAgencies:false, PagesLoaded: true,NextPageNumber:1}
            }
            
        case GET_AGENCIES_FAILURE:
            //need to put this in message component action
            let response=Object.keys(action.payload)
            for ( var pro in response ) {
                let prop=response[pro]
                console.log (prop+' : '+action.payload[prop])
            }
            return { ...state,LoadingAgencies:false}  
        default:
            return state
    }
}
export default agencyInfo