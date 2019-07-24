/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {

    var start=Date.now()

    if(candies<1||candies>Math.pow(10,9)||num_people<1||num_people>1000){
        return
    }   
    let people=[];
    for(let i=0;i<num_people;i++){
        people.push(0);
    }
    let candiesBalance=candies;
    let distributionIncreamentor=0;
    let iterationLength=people.length;
    let tempCandies=0;
    while (candiesBalance>0){
        for(let i=0;i<iterationLength;i++){
            tempCandies=people[i];
            numberOfCandiesToGive=i+1+iterationLength*distributionIncreamentor;   
            if(numberOfCandiesToGive>candiesBalance){
                people[i]=tempCandies+candiesBalance;
            } else {
                people[i]=tempCandies+numberOfCandiesToGive;
            }
            candiesBalance=candiesBalance-numberOfCandiesToGive;
            if(candiesBalance<=0){
                return people
            }
            if(i==iterationLength-1){
                distributionIncreamentor++;
            }
        }
    }
    var end=Date.now()

    var a=1;
    console.log(start-end)
    return people    
};

var distributeCandiesV2 = function(candies, num_people) {
    var start=Date.now()
    let result = new Array(num_people).fill(0);
    for(let give=0; candies>0; candies-=give){
        result[give%num_people] += Math.min(candies, ++give);
    }
    var end=Date.now()
    console.log(start-end)
    return result;
};

var distributeCandiesV3 = function(candies, num_people) {
    let res = new Array(num_people).fill(0);
    let curIndex = 0;
    for(let i = 1; i < candies; i++){
        res[curIndex] += i;
        candies -= i;
        curIndex++;
        if(curIndex === res.length) curIndex = 0;
    }
    if(candies > 0) res[curIndex] += candies;
    return res;
};
distributeCandies(17,4)

//distributeCandiesV2(17,4)


