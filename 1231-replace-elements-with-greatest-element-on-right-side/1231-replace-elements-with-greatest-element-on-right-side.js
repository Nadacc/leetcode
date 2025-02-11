var replaceElements = function(arr) {
    let o =[];
    let maxRight = -1;  

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        o[i] = maxRight;    
        maxRight = Math.max(maxRight, temp); 
    }

    return o;
};
