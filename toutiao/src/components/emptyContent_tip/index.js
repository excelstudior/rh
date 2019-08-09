import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default ()=>{
    return {
        name:'emptyContent',
        tpl(text){
            return tpl().replace(tools.tplReplace(),text)
        }
    }
}