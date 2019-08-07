import '../scss/bookmarks.scss'
import Header from '../components/header/index';
import NewsItem from '../components/news_item/index';
import tools from '../utils/tools';
const header = new Header();
const newsItem = new NewsItem();
const App = ($) => {
    const $app = $('#app'),
        $list = $app.children('.list'),
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);
    const init = () => {
        render().then(bintEvent);
    }
    const render = () => {
        return new Promise((resolve, reject) => {
            _renderHeader();
            _renderList();
            resolve();
        })
    }
    const bintEvent = () => {

    }
    const _renderHeader = () => {
        $app.append(header.tpl({
            title: '我的收藏',
            showLeftIcon: true,
            showRightIcon: false
        }))
    }
    const _renderList = () => {
        if (bookmarks!=null){
            let bookmarkIds=Object.keys(bookmarks);
            let bookmarkItems=[];
            bookmarkIds.forEach((id,index)=>{
                bookmarkItems.push(bookmarks[id])
            })
            $list.html(newsItem.tpl(bookmarkItems,0))
            tools.thumbShow($('.news-thumb'))
        } 
        
    }
    init();
}
App(Zepto);