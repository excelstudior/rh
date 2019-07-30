import '../scss/index.scss';
import Header from '../components/header/index';
import Nav from '../components/nav/index';
import data from '../utils/data';
import {IndexModel} from '../models/index'
import NewsItem from '../components/news_item/index';
import tools from '../utils/tools'
//initial components
const header = new Header(),
      nav=new Nav(),
      newsItem=new NewsItem();

//create data models
const indexModel=new IndexModel();

let field='top';
let showCount=10;
const App=($)=>{
    
    const $app=$('#app'),
          $list=$app.children('.list');
    const init=()=>{
        render().then(bindEvent);
        indexModel.getNewsList(field,showCount).then((res)=>{
            $list.html(newsItem.tpl(res[0],0));
            tools.thumbShow($('.news-thumb'))
        });
    }
    const render=()=>{
        return new Promise((resolve,reject)=>{
            _renderHeader();
            _renderNav(data.news_type);
            resolve();
        })
        
    }

    const bindEvent=()=>{
        $('.nav .nav-wrapper').on('click','.item',navSelect)
    }

    const _renderHeader=()=>{
        $app.append(header.tpl({
            title: 'JS++新闻头条',
            showLeftIcon: true,
            showRightIcon: true
        }))
    }
    const _renderNav=(newsType)=>{
        const tpls=nav.tpl(newsType);
        console.log(tpls);
        $app.append(tpls.navStr);
        $('.nav .nav-wrapper').append(tpls.itemsStr);
    }

    function navSelect(){
        const $this=$(this);
        field=$(this).attr('data-type');
        $this.addClass('current').siblings('.item').removeClass('current');
        indexModel.getNewsList(field,showCount).then((res)=>{
            $list.html(newsItem.tpl(res[0],0));
            tools.thumbShow($('.news-thumb'))
        });
    }

    init();
}
App(Zepto);