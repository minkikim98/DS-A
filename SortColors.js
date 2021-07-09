/*
    My solution to this leetcode problem: https://leetcode.com/problems/sort-colors/
    7/9/2021
*/

/*
    Solution 1
    Runtime: O(n)
    Space: O(1);
*/
function sortColors(nums) {
    let reds = 0, whites = 0, blues = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) reds++;
        else if (nums[i] === 1) whites++;
        else blue++;
    }
    for(let i = 0; i < nums.length; i++) {
        if(reds > 0) {
            Reds--;
            Nums[i] = 0;
            continue;
        }
        if(whites > 0) {
            whites;
            Nums[i] = 1;
            continue;
        }
        if(blues > 0) {
            blues;
            Nums[i] = 2;
            continue;
        }
    }
}

/* 
    Solution 2
    Runtime: O(n)
    Space: O(n)???
*/

// I saw the solution for this problem a few weeks ago. This is a Dutch partition sort.
function sortColors(nums) {
    function swap(a, b) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    let i = 0, k = 0, j = nums.length - 1;

    while(i < j) {
        if(nums[i] === 0) {
            swap(k, i);
            K++;
            i++;
        }
        else if (nums[i] === 1) {
            i++;
        }
        else {
            swap(i, j);
            j--;
        }
    }
}
