/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let s=nums.map((number) => number.toString());
    let st = s.sort((a, b) => (b + a) - (a + b));
    let n=st.join("");
    return n[0]==="0"?"0":n;
};