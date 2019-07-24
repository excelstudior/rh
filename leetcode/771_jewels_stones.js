/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var counter=0;
    jewel=J.split("");
    stone=S.split("");
    stone.forEach(element => {
        if(jewel.indexOf(element)>-1){
            counter++;
        }
    });
    console.log(counter)
    return counter;
};

numJewelsInStones('aB','aaaBssss');