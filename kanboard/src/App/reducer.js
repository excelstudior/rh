import { combineReducers } from 'redux';
import auth from '../Component/Auth/reducer';
import popup from '../Component/Common/Popup/reducer';
import {USER_LOGOUT_SUCCESS} from '../Component/Auth/constant';
const appReducers= combineReducers({
    auth,
    popup,
})

const rootReducer = (state,action) =>{
    if (action.type==USER_LOGOUT_SUCCESS){
        state=undefined;
    }
    return appReducers(state,action)
}

export default rootReducer;