import { USER_SIGN_IN_ERROR } from '../../Auth/constant';
import { INVALID_LOG_IN_INFO, 
        POPUP_TYPE_ERROR,
        POPUP_CLOSE } from '../Popup/constant';

const defaultState = {
    title:'',
    message:'',
    type:'',
    show:false,
    onConfirm:()=>{}
}

const popup = (state=defaultState,action) =>{
    switch (action.type){
        case USER_SIGN_IN_ERROR:
            return { ...state,
                message:INVALID_LOG_IN_INFO,
                type:POPUP_TYPE_ERROR,
                show:true,
                onConfirm:()=>{}
            }
        case POPUP_CLOSE:
            return defaultState
        default: return state
    }
    
}

export default popup