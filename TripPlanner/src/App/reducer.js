import { combineReducers } from 'redux';
import auth from '../Component/Auth/reducer';
import dashboard from '../Component/Dashboard/reducer';
import stopFinder from '../Component/Dashboard/TripInfo/StopFinder/reducer';
import fuel from '../Component/Fuel/reducer';
const appReducers= combineReducers({
    auth,
    dashboard,
    stopFinder,
    fuel
})
export default appReducers;