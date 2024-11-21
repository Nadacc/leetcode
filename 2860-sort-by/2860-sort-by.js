/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
let temp;
var sortBy = function(arr, fn) {
    return arr.sort((a,b) =>
    fn(a) - fn(b)
    );
    
};

