function list(){
   return Array.prototype.slice.call(arguments);
}

const IneedACallback=()=>{
    needACallBack(IamTheCallback)
}
const needACallBack=(callback)=>{
    callback();
}

const IamTheCallback=()=>{
    console.log('calling back')
}

var arr=[1];

var newArrayWithoutOtherContent=list.bind(null,1,1,2,3)
var newArrayWithOtherContent=list.bind(arr,1,1,2,3)

console.log(newArrayWithoutOtherContent())
console.log(newArrayWithOtherContent())
// IamTheCallback()
// needACallBack(IamTheCallback);
needACallBack.bind(null,IamTheCallback)()

class Ball {
   constructor(){
       this.x=12;
       this.y=14;
       this.foo=this.foo.bind(this)

   }
   foo(){
       return 'ddd'
   }
}
 
var ball=new Ball();
console.log()