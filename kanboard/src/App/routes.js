import AuthCheck from '../Component/Auth/AuthCheck/index';
import Login from '../Component/Auth/Login/index';
import Dashboard from '../Component/Dashboard/index';

const routes=[
    { path:'/',exact:true,component:AuthCheck},
    { path:'/Login',exact:true,component:Login},
    { path:'/Dashboard',exact:true,component:Dashboard}
]


export default routes
