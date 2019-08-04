/**
 * 
 * @param {*} min 
 * @param {*} max 
 */
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min);
    //return Math.random()*(max-min)+min;
}
/**
 * 
 * @param {number} min 
 * @param {number} max 
 */

function getRandomletter(min,max){
    var letterCode=getRandomNumber(min,max);
    return String.fromCharCode(letterCode);
}

var maxium=10000;
var counter=0;
function start() {
    clearInterval(timer);
    var max=maxium
    var timer=setInterval(function(){
    
    while (counter<max) {
        counter=counter+getRandomNumber(1,2)
        console.log(counter)
    }
    return
}, 500);
}

start()

//模版 字符串
console.log(`${maxium}+${counter} is sdhdfhsd`)