/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    
let a=[];

while(nums.length > 0){
    let maxIndex = nums.indexOf(Math.max(...nums));
    let minIndex = nums.indexOf(Math.min(...nums));

    
    let avg = (nums[maxIndex]+nums[minIndex])/2
    a.push(avg)
    
    
    if (maxIndex > minIndex) {
        nums.splice(maxIndex, 1);
        nums.splice(minIndex, 1); 
    } else {
        nums.splice(minIndex, 1); 
        nums.splice(maxIndex, 1); 
    }

    
}


let d=[];
for(let i=0;i<a.length;i++){
    if(!d.includes(a[i])){
        d.push(a[i])
    }
}
return(d.length)

};