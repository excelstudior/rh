import { combineReducers } from 'redux';
import auth from '../Component/Auth/reducer';
import popup from '../Component/Common/Popup/reducer';
export default combineReducers({
    auth,
    popup
})