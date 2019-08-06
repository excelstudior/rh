import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default ()=>{
    return{
        name:'bookmarkIcon',
        tpl(marked){
            return tpl().replace(tools.tplReplace(),marked)
        }
    }
}