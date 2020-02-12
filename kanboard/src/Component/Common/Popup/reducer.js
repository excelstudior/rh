import { USER_SIGN_IN_ERROR,USER_LOGOUT_SUCCESS } from '../../Auth/constant';
import { INVALID_LOG_IN_INFO, LOGOUT_SUCCESSFULLY,POPUP_TYPE_INFO,
        POPUP_TYPE_ERROR,
        POPUP_CLOSE,
    POPUP_POSITION_TOP } from '../Popup/constant';

const defaultState = {
    title:'',
    message:'',
    type:'',
    showPosition:'',
    onConfirm:()=>{}
}

const popup = (state=defaultState,action) =>{
    switch (action.type){
        case USER_SIGN_IN_ERROR:
            return { ...state,
                message:INVALID_LOG_IN_INFO,
                type:POPUP_TYPE_ERROR,
                showPosition:POPUP_POSITION_TOP
            }

        case USER_LOGOUT_SUCCESS:
            return {...state,
                message:LOGOUT_SUCCESSFULLY,
                type:POPUP_TYPE_INFO,
                showPosition:POPUP_POSITION_TOP
            }
        case POPUP_CLOSE:
            return defaultState
        default: return state
    }
    
}

export default popup