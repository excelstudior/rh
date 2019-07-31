import '../scss/index.scss';
import Header from '../components/header/index';
import Nav from '../components/nav/index';
import data from '../utils/data';
import NewsItem from '../components/news_item/index';
import PageLoading from '../components/pageLoading/index';
import BottomTip from '../components/bottom_tip/index';

import {IndexModel} from '../models/index'

import tools from '../utils/tools'

//initial components
const header = new Header(),
      nav=new Nav(),
      newsItem=new NewsItem(),
      pageLoading=new PageLoading(),
      bottomTip=new BottomTip();
//create data models
const indexModel=new IndexModel();

const App=($)=>{
    let field='top',
    showCount=10,
    pageNum=0,
    pageCount=0,
    dataCache={};
    
    const $app=$('#app'),
          $list=$app.children('.list');
    const init=()=>{
        render(field,pageNum).then(bindEvent);
     }
    const render=(field,pageNum)=>{
        return new Promise((resolve,reject)=>{
            _renderHeader();
            _renderNav(data.news_type);
            _renderList(field,pageNum);
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
        $app.append(tpls.navStr);
        $('.nav .nav-wrapper').append(tpls.itemsStr);
    }

    /**
     * Render news items list
     * @param {*} field 
     * @param {*} pageNum 
     */ 
    const _renderList=(field,pageNum)=>{
        if(dataCache[field]){
            pageCount=dataCache[field].length
            _insertList();
        } else {
            _renderPageLoading();
            indexModel.getNewsList(field,showCount).then((res)=>{
                dataCache[field]=res;
                pageCount=dataCache[field].length;
                setTimeout(() => {
                    _insertList();   
                }, 500);    
            });
        }
        console.log(dataCache)
    }

    const _insertList=()=>{
        $list.html(newsItem.tpl(dataCache[field][pageNum],pageNum));
        $('.loading-icon').remove();
        _showNewsThumb();  
    }
    const _showNewsThumb=()=>{
        tools.thumbShow($('.news-thumb'));
        _handleBottomTip('append','loading','Loading...')

        setTimeout(() => {
            _handleBottomTip('remove')
        }, 2000);
    }
    const _renderPageLoading=()=>{
        $list.html('');
        $app.append(pageLoading.tpl());
    }


    const _handleBottomTip=(action,isLoading,text)=>{
        switch(action){
            case 'append':
                $app.append(bottomTip.tpl(isLoading,text));
                break;
            case 'remove':
                $('.bottom-tip').remove();
                break;
            case 'removeAndAppend':
                $('.bottom-tip').remove();
                $app.append(bottomTip.tpl(isLoading,text))

        }
    }
    // update nav bar selected items

    function navSelect(){
        const $this=$(this);
        field=$(this).attr('data-type');
        $this.addClass('current').siblings('.item').removeClass('current');
        // indexModel.getNewsList(field,showCount).then((res)=>{
        //     $list.html(newsItem.tpl(res[0],0));
        //     tools.thumbShow($('.news-thumb'))
        // });
        _renderList(field,pageNum);
    }
    
    init();
}
App(Zepto);