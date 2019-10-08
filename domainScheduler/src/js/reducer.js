import { combineReducers } from 'redux';
//import nav from './Common/Component/nav/reducer';
import navbar from './Common/Component/Navbar/reducer';
import agencyInfo from './Common/Component/Agency/reducer';
export default combineReducers({
    navbar,
    agencyInfo,
})