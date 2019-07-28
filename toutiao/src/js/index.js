import '../scss/index.scss'
import Header from '../components/header/index'
const header = new Header()
const App=($)=>{
    console.log($);
    const $app=$('#app');
    const init=()=>{
        render();
    }
    const render=()=>{
        _renderHeader();
    }
    const _renderHeader=()=>{
        console.log(header.tpl({
            title: 'JS++新闻头条',
            showLeftIcon: false,
            showRightIcon: true
        }));
    }
    init()
}
App(Zepto);