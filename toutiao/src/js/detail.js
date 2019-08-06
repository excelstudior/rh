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
    const init = () => {
       
        render();
    }
    const render = () => {
        _renderHeader();
        _renderNewsDetail(newsUrl);
        _renderBookmarkIcon();
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
    const _renderBookmarkIcon = () => {
        $app.append(bookmarkIcon.tpl(''))  
    }

    init();
}
App(Zepto);