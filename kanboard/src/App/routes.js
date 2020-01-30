import AuthCheck from '../Component/Auth/AuthCheck/index';
import Login from '../Component/Auth/Login/index';
import MainView from '../Component/MainView/index';
import Dashboard from '../Component/Dashboard/index';

const routes=[
    { path:'/',exact:true,component:AuthCheck},
    { path:'/Login',exact:true,component:Login},
    { path:'/MainView',exact:true,component:MainView},
    { path:'/Dashboard',exact:true,component:Dashboard}
]


export default routes
