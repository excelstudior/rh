function tplReplace(){
  return /{{(.*?)}}/g;
}

function thumbShow(dom){
  dom.on('load',function(){
    $(this).css('opacity',1);
  })
}

module.exports={
  tplReplace,
  thumbShow,
}