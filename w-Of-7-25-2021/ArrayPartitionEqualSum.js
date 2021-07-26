// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
// Solution inspired by rock

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr);
    if (sum % 3 !== 0) return false;
    const average  = sum / 3;
    
    let count = 0;
    let currSum = 0;
    arr.forEach(num => {
        currSum += num;
        if (currSum === average) {
            count++;
            currSum = 0;
        }
    });
    
    return count >= 3;
};