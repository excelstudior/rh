import '../scss/index.scss';
import Header from '../components/header/index';
import Nav from '../components/nav/index';
import data from '../utils/data';
import NewsItem from '../components/news_item/index';
import PageLoading from '../components/pageLoading/index';
import BottomTip from '../components/bottom_tip/index';

import { IndexModel } from '../models/index'

import tools from '../utils/tools'

//initial components
const header = new Header(),
    nav = new Nav(),
    newsItem = new NewsItem(),
    pageLoading = new PageLoading(),
    bottomTip = new BottomTip();
//create data models
const indexModel = new IndexModel();

const App = ($, win) => {
    let field = 'top',
        showCount = 10,
        pageNum = 0,
        pageCount = 0,
        dataCache = {},
        isBottom=false;


    const $app = $('#app'),
        $window = $(win),
        $list = $app.children('.list'),
        loadMoreNewsItems = tools.scrollToBottom.bind(null, handleScrollToBottom);

    const init = () => {
        render(field).then(bindEvent);
    }
    const render = (field) => {
        return new Promise((resolve, reject) => {
            _renderHeader();
            _renderNav(data.news_type);
            _renderList(field, showCount);
            resolve();
        })

    }

    const bindEvent = () => {
        $('.nav .nav-wrapper').on('click', '.item', navSelect);
        $list.on('click','.news-item',showNewsDetail);// event bubble and event delegate
    }

    const _renderHeader = () => {
        $app.append(header.tpl({
            title: 'JS++新闻头条',
            showLeftIcon: false,
            showRightIcon: false
        }))
    }

    const _renderNav = (newsType) => {
        const tpls = nav.tpl(newsType);
        $app.append(tpls.navStr);
        $('.nav .nav-wrapper').append(tpls.itemsStr);
    }

    /**
     * Render news items list
     * @param {*} field 
     * @param {*} pageNum 
     */
    const _renderList = (field, showCount) => {
        if (dataCache[field]) {
            pageCount = dataCache[field].length
            _insertList('init');
        } else {
            _renderPageLoading();
            pageNum = 0;
            indexModel.getNewsList(field, showCount).then((res) => {
                dataCache[field] = res;
                pageCount = dataCache[field].length;
                setTimeout(() => {
                    _insertList('init');
                }, 500);
            });
        }
        console.log(dataCache)
    }

    const _insertList = (type) => {
        switch(type){
            case 'init':
                $list.html(newsItem.tpl(dataCache[field][pageNum], pageNum));
                $('.loading-icon').remove();
                _postListRender(true);
            break;
            case 'append':
                $list.append(newsItem.tpl(dataCache[field][pageNum], pageNum));
                _handleBottomTip('remove')
                _postListRender(true);
            break;
        }

    }
    const _postListRender=(shouldBindScrollEvent)=>{
        _bindWindowScrollEvent(shouldBindScrollEvent);
        tools.thumbShow($('.news-thumb'));
    }
    const _renderPageLoading = () => {
        $list.html('');
        $app.append(pageLoading.tpl());
    }
    const _bindWindowScrollEvent = (isBind) => {
        isBind ? $window.on('scroll', loadMoreNewsItems)
            : $window.off('scroll', loadMoreNewsItems);
    }
    const _handleBottomTip = (action, isLoading, text) => {
        switch (action) {
            case 'append':
                $app.append(bottomTip.tpl(isLoading, text));
                break;
            case 'remove':
                $('.bottom-tip').remove();
                break;
            case 'removeAndAppend':
                $('.bottom-tip').remove();
                $app.append(bottomTip.tpl(isLoading, text))
                break;
            case 'end':
                $app.append(bottomTip.tpl(isLoading, text))
        }
    }

    function handleScrollToBottom() {
        
        _bindWindowScrollEvent(false)
        if(pageNum<pageCount-1){
            _handleBottomTip('append','loading','More to come...')
            
            setTimeout(() => {
                pageNum++;
                _insertList('append');
                console.log("next page is "+pageNum)
            }, 2000);

        } else {
            _handleBottomTip('end','','Back to top');
            $('.bottom-tip').on('click',function(){
                win.scrollTo(0,0)
            })

        }
        
    }
    // update nav bar selected items

    function navSelect() {
        resetLoadingParameters();
        const $this = $(this);
        field = $(this).attr('data-type');
        $this.addClass('current').siblings('.item').removeClass('current');
        _renderList(field,showCount);
    }

    function resetLoadingParameters(){ 
      //  tools.scrollToWindowTop(0);
        win.scrollTo(0,0);
        pageNum=0;
        _handleBottomTip('remove');
        _bindWindowScrollEvent('false');
        
       
    }

    function showNewsDetail(){
        const $this=$(this),
              url=$this.attr('data-url'),
              idx=$this.attr('data-index'),
              pageNum=$this.attr('data-page'),
              uniquekey=$this.attr('data-uniquekey');
        console.log(dataCache[field][pageNum][idx])
        //save data to localStorage
        localStorage.setItem('target',JSON.stringify(dataCache[field][pageNum][idx]))
        window.location.href=`detail.html?news_url=${url}&uniquekey=${uniquekey}`
    }

    init();
}
App(Zepto, window);