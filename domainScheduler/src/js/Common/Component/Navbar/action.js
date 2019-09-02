import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { isConnectingToApi } from '../../Apis/Utils/tool';
import { connectApi } from '../../Utils/auth/connectApi';
/**
 * Test Data Retriever
 */
import { getAllAgencies } from '../../Apis/DataRetriever/agency'
export const testGetAgencies = () =>{
    getAllAgencies()
}
 /**
  * Test Data Retriver End
  */

export const TOGGLE_API_SWITCH='TOGGLE_API_SWITCH';
export const ERROR='ERROR';
export const INFO='INFO';


/**
 * Connect to Apis and Apis Swithes
 */
export const connectToDomain = () => {
    return (dispatch) => {
        if ( isConnectingToApi( DOMAIN )){
            alert ('Connected to Domain Api');
            return;
        }
        connectApi( DOMAIN ).then(result=>signInDomainSuccess(result,dispatch)) 
            .catch((error)=>processError(error))
    } 
}
export const disconnectToDomain = () => {
    return (dispatch) => {
        if ( isConnectingToApi( DOMAIN )){
            localStorage.removeItem( DOMAIN );
            dispatch(toggleApiSwitch( DOMAIN ));
        } else {
            alert ('Disconnected from Domain Api')
        }
    }
}
const signInDomainSuccess = (result,dispatch) => {
    //set local storage item
    console.log(result)
    localStorage.setItem ( DOMAIN,JSON.stringify(result.data));
    dispatch(toggleApiSwitch( DOMAIN ))
}
const processError = (error) => {
    console.log (error)
    alert(error.data.err||error);
}
const toggleApiSwitch = (apiName) => ({
    type:TOGGLE_API_SWITCH,
    payloads:apiName
})

