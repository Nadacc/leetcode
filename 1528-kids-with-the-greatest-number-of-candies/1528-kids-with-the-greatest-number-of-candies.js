/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies); 
    let b=candies.map(candy => candy + extraCandies >= maxCandies);
    return b
};
