import { DOMAIN, DOMAIN_TIMEOUT } from '../../Apis/Domain/Endpoint/domain';
import { isConnectingToApi } from '../../Apis/Utils/tool';
import { TOGGLE_API_SWITCH } from './action';

const initialState={
    domain:isConnectingToApi(DOMAIN),
    message:{ type:'',
              content:'' }
}
const navbar = ( state=initialState,action) => {
    switch (action.type){
        case TOGGLE_API_SWITCH:
            switch (action.payloads){
                case DOMAIN:
                    // return {...state,domain:!state.domain}
                    return Object.assign({},state,{domain:!state.domain})
                default:
                    return state
            }
        case DOMAIN_TIMEOUT:
            alert ( 'Domain Api is disconnected' )
            return { ...state, domain:false }
        default:
            return state
    } 
}

export default navbar