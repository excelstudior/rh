import { DOMAIN } from '../../Apis/Domain/Endpoint/domain';
import { connectApi } from '../../Utils/auth/connectApi';

export const TOGGLE_API_SWITCH='TOGGLE_API_SWITCH';
export const ERROR='ERROR';
export const INFO='INFO';

export const connectToDomain = () => {
    return (dispatch)=>{
        if (localStorage.getItem('DomainApi')!==null){
            console.log ('Connected to Domain Api');
            return;
        }
        connectApi( DOMAIN ).
            then(result=>signInDomainSuccess(result,dispatch)) 
    } 
}
const signInDomainSuccess = (result,dispatch) => {
    //set local storage item
    console.log(result)
    localStorage.setItem ('DomainApi',JSON.stringify(result.data));
    dispatch(toggleApiSwitch(DOMAIN))
}
const signInDomainError = (error,dispatch) =>{
    console.log (error)
    dispatch()
}
export const toggleApiSwitch = (apiName) =>({
    type:TOGGLE_API_SWITCH,
    payloads:apiName
})