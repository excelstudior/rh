import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { TOGGLE_API_SWITCH } from './action';

const initialState={
    domain:false
}
const apiSwitch = ( state=initialState,action) => {
    switch (action.type){
        case TOGGLE_API_SWITCH:
            switch (action.payloads){
                case DOMAIN:
                    // return {...state,domain:!state.domain}
                    return Object.assign({},state,{domain:!state.domain})
                default:
                    return state
            }
            
        default:
            return state
    } 
}

export default apiSwitch