import { GET_AGENTS_BY_NAME_SUCCESS, GET_AGENTS_BY_NAME_FAILURE } from '../Agent/action';

const initialState={
    Agents:[],
    SelectedAgent:{}
}
const agentInfo = (state=initialState,action) =>{
    switch (action.type){
        case GET_AGENTS_BY_NAME_SUCCESS:
            console.log(action)
            return {...state,Agents:action.payload}
        case GET_AGENTS_BY_NAME_FAILURE:
            console.log(action)
            return state
        default:
            return state
    }
}
export default agentInfo