/**
 * @param {string} address
 * @return {string}
 */

/***
 * The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
 * If pattern is a string, only the first occurrence will be replaced.
 *  */  

/**
 * A . in regex is a metacharacter, it is used to match any character. To match a literal dot, you need to escape it, so \.
 */ 
var defangIPaddr = function(address) {
    var source='.'
    return address.replace(/\./g,'[.]')
};

console.log(defangIPaddr("1.1.1.1"))