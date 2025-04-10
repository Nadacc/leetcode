/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let t=title.split(" ");

    let o=[];
    let result=""
    for(let i=0;i<t.length;i++){
        if(t[i].length>2){
            let p=t[i][0].toUpperCase();
            let q=t[i].slice(1).toLowerCase()
            let result=p+q
            
            o.push(result)
        }
        
        else{
            let q=t[i].toLowerCase()
            
            o.push(q)
        }
    }

    return(o.join(" "))
};