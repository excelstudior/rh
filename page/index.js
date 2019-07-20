// create pager

// total: total data entry
// current: current page number, min 1
// limit: page size , limit entry of page
// container: for pager
// firstText :text for home, first last previous next
// prevText:
// nextText:
// lastText:
//  panelNumber: max number show

//




function Pager(options){
    var defaultOptions={
        total:0,
        current:1,
        limit:10,
        container:document.querySelector(".pager"),
        firstText: "home",
        prevText:"previous",
        nextText:"next",
        lastText:"last",
        panelNumber:10,
        onPageChange:null// callback
    }
    this.options= Object.assign({},defaultOptions,options)
    // this.options={
    //     ...defaultOptions,
    //     ...options
    // }
    this.options.totalPageNumber=this.getTotalPageNumber();
    this.show();
    this.registEvent();
    console.log(this.options)
}
Pager.prototype.show=function(){
    this.options.container.innerHTML="";
    //create home
    var disabled="";
    if(this.options.current===1){
        disabled='disabled'
    }
    this.createPagerItem("first "+disabled,this.options.firstText);
    
    this.createPagerItem("prev "+disabled,this.options.prevText);

    this.createNumber()
    if(this.options.current!==this.options.totalPageNumber){
        disabled=""
    } else{
        disabled="disabled"
    }
    this.createPagerItem("next "+disabled,this.options.nextText);
    this.createPagerItem("last "+disabled,this.options.lastText);
   //
   var span=document.createElement("span");
   span.className="page-text";
   span.innerHTML=`<i class="current">${this.options.current}</i>/<i class="current">${this.options.totalPageNumber}</i>`;
   this.options.container.appendChild(span)
   
}
Pager.prototype.createPagerItem=function(extraClassName,content){
    var a=document.createElement("a");
    a.id=content;
    a.className=extraClassName+" pager-item";
    a.innerText=content;
    this.options.container.appendChild(a);
    return a
}
Pager.prototype.getTotalPageNumber=function(){
    return Math.ceil(this.options.total/this.options.limit)
}
Pager.prototype.registEvent=function(){
    var _this=this;
    this.options.container.addEventListener("click",function(e){
        if(e.target.classList.contains("first")){
            _this.toPage(1)
        } else if(e.target.classList.contains("prev")){
            var page=_this.options.current-1;
            _this.toPage(page)
        } else if(e.target.classList.contains("next")){
            _this.toPage(_this.options.current+1);
        }else if(e.target.classList.contains("last")){
            _this.toPage(_this.getTotalPageNumber());
        }else if(!isNaN(e.target.id)){
            console.log("click",e.target.id)
            _this.toPage(Number(e.target.id))
        }
    }
    )
}

Pager.prototype.toPage=function(page){
    if(page<1){
        page=1
    }
    if(page>this.options.totalPageNumber){
        page=this.options.totalPageNumber
    }
    if(this.options.current===page){
        return;
    }
    this.options.current=page;
    this.show();
    if(this.options.onPageChange){
        this.options.onPageChange(page)
    }
}

Pager.prototype.createNumber=function(){
    var min=this.options.current-Math.floor(this.options.panelNumber/2);
    if(min<1){
        min=1
    }
    var max=min+this.options.panelNumber-1;
    //var pageNumber=this.getTotalPageNumber();
    if(max>this.options.totalPageNumber){
        max=this.options.totalPageNumber;
    }
    for (var i=min;i<=max;i++){
        let active="";
        if(i===this.options.current){
            active="active" 
        }
        this.createPagerItem(active+" number",i)
    }
}