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