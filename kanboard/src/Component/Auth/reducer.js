import { USER_SIGN_IN_SUCCESS,USER_SIGN_IN_ERROR}from './constant';

const defaultState={
    user:{},
    isAuthenticated:false
}
const auth=(state=defaultState,action)=>{
    switch(action.type){
        case USER_SIGN_IN_SUCCESS:
            return { ...state,
                     user:action.payload.userName,
                     isAuthenticated:true }
    default:return state
    }
    
}


export default auth