import { UPDATE_SEARCH_TEXT, CLEAR_SEARCH_TEXT } from "./action"
import { STOP_FIND_SUCCESS } from './action';
const initState ={
    stopFinderSearchText:'',
    stopList:[{name:'stop 1'},{name:'stop 2'}],
    isLoading:false
}

const stopFinder = (state=initState,action) =>{
    switch(action.type){
        case UPDATE_SEARCH_TEXT:
            return { ...state,
                stopFinderSearchText:action.payload,
                stopList:[],
                isLoading:true }
        case CLEAR_SEARCH_TEXT:
            return { ...initState }
        case STOP_FIND_SUCCESS:
            console.log (action.payload)
            return {...state}
        // case STOP_FIND_REQUEST:
        //     return {...state}
        // case STOP_FIND_FAILURE:
        //     return {...state}
        default:
            return state
    }
}

export default stopFinder