import '../scss/detail.scss'
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
        $app.append(header.tpl({
            title: '详情',
            showLeftIcon: true,
            showRightIcon: true
        }))
    }
    init();
}
App(Zepto);