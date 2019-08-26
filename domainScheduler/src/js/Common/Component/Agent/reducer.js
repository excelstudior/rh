import { GET_AGENTS_BY_NAME_REQUEST,
    GET_AGENTS_BY_NAME_SUCCESS, 
    GET_AGENTS_BY_NAME_FAILURE,
    SET_AGENT_SEARCH_CRITERIA } from '../Agent/action';

const initialState={
    Agents:[],
    SearchCriteria:'',
    PageNumber:0,
    PageSize:20,
    SelectedAgent:{}
}
const agentInfo = (state=initialState,action) =>{
    switch (action.type){
        case SET_AGENT_SEARCH_CRITERIA:
            console.log(action.payload)
            return { ...state,SearchCriteria:action.payload }
        case GET_AGENTS_BY_NAME_SUCCESS:
            console.log(action)
            return { ...state,Agents:action.payload }
        case GET_AGENTS_BY_NAME_FAILURE:
            console.log(action)
            return state
        default:
            return state
    }
}
export default agentInfo