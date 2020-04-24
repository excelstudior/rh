import { UPDATE_MODE } from "../LandingPage/action"

const initState={
    mode:''
}

const dashboard=(state = initState,action) =>{
    switch (action.type){
        case UPDATE_MODE:
            return { ...state,mode:action.payload}
        default:
            return state
    }
    
}

export default dashboard