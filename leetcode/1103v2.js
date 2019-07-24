var distributeCandies = function(candies, num_people) {
    let result = new Array(num_people).fill(0);
    for(let give=0; candies>0; candies-=give){
        result[give%num_people] += Math.min(candies, ++give);
    }
    
    return result;
};

console.log(distributeCandies(17,4))