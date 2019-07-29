import '../scss/index.scss';
import Header from '../components/header/index';
import Nav from '../components/nav/index';
import data from '../utils/data';

const header = new Header();
const nav=new Nav();
let field='top';
const App=($)=>{

    const $app=$('#app');
    const init=()=>{
        render().then(bindEvent);
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
    }

    init();
}
App(Zepto);