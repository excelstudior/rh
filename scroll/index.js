
// checking scroll and size element changes 
// 
var scrollHeight ;
var scrollTop ;
var clientHeight;
var toBottom;

function getClientEndToBottomHeight() {
    scrollHeight = document.documentElement.scrollHeight;
    scrollTop = document.documentElement.scrollTop;
    clientHeight = document.documentElement.clientHeight;
    return scrollHeight - scrollTop - clientHeight
}

window.onscroll = function () {
    toBottom = getClientEndToBottomHeight();
    //console.log(toBottom)
    console.log("scrollHeight is " + scrollHeight
        + " ,scrollTop is " + scrollTop
        + " ,clientHeight " + clientHeight
        + " and height to bottom is " + toBottom)
    
    //trigger 
    if(toBottom==0){
        //trigger here
        console.log("Bottom!!")
    } 
    if(scrollTop==0){
        console.log("top!!")
    }   
}

