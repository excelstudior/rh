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
    console.log(loadMoreNewsItems, handleScrollToBottom)
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
        $('.nav .nav-wrapper').on('click', '.item', navSelect)
    }

    const _renderHeader = () => {
        $app.append(header.tpl({
            title: 'JS++新闻头条',
            showLeftIcon: true,
            showRightIcon: true
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
        bindWindowScrollEvent(shouldBindScrollEvent);
        tools.thumbShow($('.news-thumb'));
    }
    const _renderPageLoading = () => {
        $list.html('');
        $app.append(pageLoading.tpl());
    }
    const bindWindowScrollEvent = (isBind) => {
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
        
        bindWindowScrollEvent(false)
        if(pageNum<pageCount-1){
            _handleBottomTip('append','loading','More to come...')
            
            setTimeout(() => {
                pageNum++;
                _insertList('append');
                console.log("next page is "+pageNum)
            }, 2000);

        } else {
            _handleBottomTip('end','','End of the thread...')
        }
        
    }
    // update nav bar selected items

    function navSelect() {
        const $this = $(this);
        field = $(this).attr('data-type');
        $this.addClass('current').siblings('.item').removeClass('current');
        _renderList(field,showCount);
    }

    init();
}
App(Zepto, window);