/**
 * 
 * @param {Map} map 
 * @param {string} join 
 * @param {string} quote 
 */
export const mapToString = (map,join,quote) =>{
    let str=''
    for (var [key,value] of map.entries()){
        return str+=key+join+quote+value+quote
    }
}
// scroll to bottom check
const getScrollTop = () => {
    let scrollTop=0,bodyScrollTop=0,documentScrollTop=0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = ( bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

const getScrollHeight = () => {
    let scrollHeight=0,bodyScrollHeight=0,documentScrollHeight=0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = ( bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

const getWindowHeight = () => {
    let windowHeight = 0;
    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
export const scrollToBottom = () =>{
    return getScrollTop()+getWindowHeight() === getScrollHeight()
}
// End scroll to bottom check