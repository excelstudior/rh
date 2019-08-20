import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';

import { TOGGLE_APIS } from './action';

const initialState = {
    apis: {
        domain: false,
        google: false
    }
}
const nav = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_APIS:
            switch (action.payloads.apiName) {
                case DOMAIN:
                    return Object.assign({}, state, state.apis.domain = action.payloads.isConnected)
            }
        default:
            return state
    }
}
export default nav