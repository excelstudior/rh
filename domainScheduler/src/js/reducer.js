import { combineReducers } from 'redux';
//import nav from './Common/Component/nav/reducer';
import navbar from './Common/Component/Navbar/reducer';
import agentInfo from './Common/Component/Agent/reducer';
export default combineReducers({
    navbar,
    agentInfo
})