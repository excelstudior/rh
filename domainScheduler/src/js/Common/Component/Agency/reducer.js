import {
    GET_AGENCIES_REQUEST, 
    GET_AGENCIES_SUCCESS, 
    GET_AGENCIES_FAILURE,
    SET_AGENCY_SEARCH_CRITERIA,
    SET_SELECTED_AGENCY,
    GET_AGENCY_BY_ID_REQUEST,
    GET_AGENCY_BY_ID_SUCCESS
} from './action';
import {  CLOSE_AGENCY_MODAL } from '../Common/Modal/Agency/action';
import { AGENCY_NOT_FOUND, END_OF_THE_LIST }from './constants';
const initialState={
    Agencies:[],
    LoadingAgencies:false,
    SearchCriteria:'',
    NextPageNumber:1,
    PageSize:20,
    SelectedAgency:{},
    LoadingAgencyDetails:false,
    PagesLoaded:false,
    modal:{title:'Agency',message:''}
}
const agencyInfo = ( state = initialState, action ) =>{
    switch ( action.type ){
        case SET_AGENCY_SEARCH_CRITERIA:
            return { ...initialState, SearchCriteria:action.payload }
        case SET_SELECTED_AGENCY:
            return { ...state, SelectedAgency: action.payload }
        case GET_AGENCY_BY_ID_REQUEST:
            return { ...state, LoadingAgencyDetails: true }
        case GET_AGENCY_BY_ID_SUCCESS:
            return { ...state, 
                    SelectedAgency: action.payload,
                    LoadingAgencyDetails: false }
        case GET_AGENCIES_REQUEST:
            return { ...state,LoadingAgencies : true}    
        case GET_AGENCIES_SUCCESS:
            if( action.payload.length!==0 ){
                return { ...state,
                        LoadingAgencies:false ,
                        Agencies:[ ...state.Agencies, action.payload ] ,
                        NextPageNumber:state.NextPageNumber++ }
            } else if ( action.payload.length!==0 && PagesLoaded===true && NextPageNumber===1 ) {
                return { ...state,
                        modal:{ ...state.modal, message:END_OF_THE_LIST } }
            } else {
                return { ...state, 
                         LoadingAgencies:false, 
                         PagesLoaded: true,
                         NextPageNumber:1 }
            }  
        case GET_AGENCIES_FAILURE:
            //need to put this in message component action
            let response=Object.keys(action.payload)
            for ( var pro in response ) {
                let prop=response[pro]
                console.log (prop+' : '+action.payload[prop])
                if (prop==='message'){
                    return { ...state,
                            modal:{ ...state.modal,
                                message:AGENCY_NOT_FOUND},
                            LoadingAgencies:false}  
                }
            }
        case CLOSE_AGENCY_MODAL:
            return { ...state,modal:{ ...state.modal,message:''}  }   
        default:
            return state
    }
}
export default agencyInfo