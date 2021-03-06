import '../scss/bookmarks.scss'
import Header from '../components/header/index';
import NewsItem from '../components/news_item/index';
import tools from '../utils/tools';
import EmptyContentTip from '../components/emptyContent_tip/index';

// initial components
const header = new Header();
const newsItem = new NewsItem();
const emptyContentTip= new EmptyContentTip();

// initial app
const App = ($) => {
    const $app = $('#app'),
        $list = $app.children('.list'),
        bookmarks = JSON.parse(localStorage.getItem('bookmarks')),
        bookmarkItems=bookmarks !=null?createBookmarkItems(bookmarks):[];
    console.log(bookmarks);
    const init = () => {
        render().then(bintEvent);
    }
    const render = () => {
        return new Promise((resolve, reject) => {
            _renderHeader();
            _renderList(bookmarkItems);
            resolve();
        })
    }
    const bintEvent = () => {
        $list.on('click','.news-item',showItemDetails)
    }
    const _renderHeader = () => {
        $app.append(header.tpl({
            title: '我的收藏',
            showLeftIcon: true,
            showRightIcon: false,
            showHomeIcon:true
        }))
    }
    const _renderList = (items) => {
        console.log(bookmarks)
        if (bookmarks==null || (bookmarks!=null && Object.keys(bookmarks).length===0)){
            $list.append(emptyContentTip.tpl("没有收藏内容"))
        } else {
            $list.html(newsItem.tpl(items,0))
            tools.thumbShow($('.news-thumb'))
        }
        
    }

    function createBookmarkItems(bookmarks){
        let bookmarkIds=Object.keys(bookmarks);
        let Items=[];
        bookmarkIds.forEach((id,index)=>{
            Items.push(bookmarks[id])
        })
        return Items;
    }
    function showItemDetails(){
        const $this=$(this),
        url=$this.attr('data-url'),
        uniquekey=$this.attr('data-uniquekey');
        localStorage.setItem('target',JSON.stringify(bookmarks[uniquekey]));
        window.location.href=`detail.html?news_url=${url}&uniquekey=${uniquekey}`;
    }

    init();
}
App(Zepto);