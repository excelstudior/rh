const CONFIGURATION='CONFIGURATION';
const CONFIGURATION_ROLE='ROLE';


const configurationRole = { 
    value:CONFIGURATION_ROLE,
    icon:'fa fa-user-secret' }
const configuration= {
    value:CONFIGURATION,
    children:[configurationRole]
}
export default configuration;