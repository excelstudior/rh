import { USER_SIGN_IN_SUCCESS,
    GET_USER_INFO_FAILED,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_REQUEST,USER_LOGOUT_SUCCESS}from './constant';

const defaultState={
    user:'',
    userInfo:{},
    isAuthenticated:false
}
const auth=(state=defaultState,action)=>{
    switch(action.type){
        case USER_SIGN_IN_SUCCESS:
            return { ...state,
                     user:action.payload,
                     isAuthenticated:true }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo:action.payload[0]
            }
        case USER_LOGOUT_SUCCESS:
            return defaultState
    default:return state
    }
    
}


export default auth