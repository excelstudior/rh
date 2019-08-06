import '../scss/detail.scss'
import tools from '../utils/tools';
import Header from '../components/header/index';
import NewsDetail from '../components/new_detail/index';
import BookmarkIcon from '../components/bookmarkIcon/index';
const header = new Header(),
    newsDetail = new NewsDetail(),
bookmarkIcon = new BookmarkIcon();


const App = ($) => {
    console.log($);
    const $app = $('#app'),
        $newsFrame = $('.frame-wrapper'),
        newsUrl = tools.getUrlQueryValue('news_url'),
        uniquekey = tools.getUrlQueryValue('uniquekey');
    
    let  bookmarks=JSON.parse(localStorage.getItem('bookmarks'))||{},
         marked;
         bookmarks[uniquekey]===undefined ? marked='':marked='marked';

    const init = () => {
        render().then(bindEvent);
    }
    const render = () => {
        return new Promise((resolve,reject)=>{
            _renderHeader();
            _renderNewsDetail(newsUrl);
            _renderBookmarkIcon(marked);
            resolve()
        })
    }
    const bindEvent = () =>{
        $('.bookmarkIcon').on('click',toggleBookmark);  
    }
    const _renderHeader = () => {
        $app.append(header.tpl({
            title: '详情',
            showLeftIcon: true,
            showRightIcon: false
        }))
    }
    const _renderNewsDetail = (targetUrl) => {
        $newsFrame.append(newsDetail.tpl(targetUrl))
    }
    const _renderBookmarkIcon = (isMarked) => {
        $app.append(bookmarkIcon.tpl(isMarked));
        
    }
    function toggleBookmark(){
        
        if(bookmarks[uniquekey]){
            delete bookmarks[uniquekey];
        }else{
            bookmarks[uniquekey]=JSON.parse(localStorage.getItem('target'));
        }
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
         $('.bookmarkIcon').toggleClass('marked');
    }

    init();
}
App(Zepto);