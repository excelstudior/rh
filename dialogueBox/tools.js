function tplReplace() {
  return /{{(.*?)}}/g;
}
function thumbShow(dom) {
  dom.on('load', function () {
    $(this).css('opacity', 1);
  })
}
function scrollToBottom(callback) {
  if (typeof (callback) != 'function') { console.log(callback + ' is not a function'); return }
  if (_getScrollTop() + _getWindowHeight() === _getScrollHeight()) {
    callback()
  }
}

function scrollToWindowTop(){
    window.scrollTo(0,0)
}

module.exports = {
  tplReplace,
  thumbShow,
  scrollToBottom,
  setScrollTop
}

//private function

function _getScrollTop() {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

function _getScrollHeight() {
  let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

function _getWindowHeight() {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}