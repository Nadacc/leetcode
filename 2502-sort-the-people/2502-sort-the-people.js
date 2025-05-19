/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let a=[];

    let largest=heights[0];
    while(names.length>0){
        for(let i=1;i<heights.length;i++){
    
            if(heights[i]>largest){
                largest=heights[i];
                
            }
        
        }
        
        let ind=heights.indexOf(largest);
        
        
        a.push(names[ind])
        
        heights.splice(ind,1)
        names.splice(ind,1)
        
        largest=heights[0]
    }
    return a
};