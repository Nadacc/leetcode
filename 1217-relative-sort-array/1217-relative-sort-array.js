/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let o = [];  
    let r = []; 

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                o.push(arr1[j]);  
            }
        }
    }

    for (let j = 0; j < arr1.length; j++) {
        if (!arr2.includes(arr1[j])) {
            r.push(arr1[j]);  
        }
    }

    let s = r.sort(function(a, b) { return a - b }); 
    let p = o.concat(s);  
    return p;
};
