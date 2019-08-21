import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { connectApi } from '../../Utils/auth/connectApi';

export const CONNECTED_DOMAIN_API='CONNECT_DOMAIN_API';
export const TOGGLE_APIS='TOGGLE_APIS';

export const connectToDomain = () => {
    return (dispatch)=>{
        connectApi( DOMAIN ).
            then(result=>signInDomainSuccess(result,dispatch)) 
    } 
}

const signInDomainSuccess = (result,dispatch) => {
        //set local storage item
        console.log(result)
        localStorage.setItem ('DomainApi',JSON.stringify(result.data));
        dispatch(toggleApis(DOMAIN,true))
}
const signInDomainError = (error) => {
    console.error(error.response.data)
}

export const toggleApis = ( apiName, isConnected ) => ({
    type:TOGGLE_APIS,
    payloads:{ apiName, isConnected }
})