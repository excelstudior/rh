import navTpl from './nav.tpl'
import itemTpl from './nav_item.tpl'
import './index.scss';

import tools from '../../utils/tools';

export default ()=>{
    return{
        name:'nav',
        tpl(newsType){
            const length=newsType.length
            const wrapperW=(6*length)+'rem'
            let navStr='',
                itemsStr='';
                navStr=navTpl().replace(tools.tplReplace(),wrapperW);
                newsType.forEach((item,index)=>{
                    itemsStr+=itemTpl().replace(tools.tplReplace(),(node,key)=>{
                        return{
                            isCurrent:index===0?'current':'',
                            type:item.type,
                            typeName:item.chs
                        }[key]
                    })
                })
                return{
                    navStr,
                    itemsStr
                }
        }
    }
}