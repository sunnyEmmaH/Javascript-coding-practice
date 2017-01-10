/*
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len=nums.length;
    if(len===0) return 1;
    var num;
    var i=0;
    while(i<len){
        num=nums[i];
        if(nums[i]!=i+1 && num<len && num>0 && nums[num-1]!=num){
            nums[i]=nums[num-1];
            nums[num-1]=num;
        }
        else i++;
    }
    for(i=0; i<len; i++){
        if(nums[i]!=i+1)
            return i+1;
    }
    return len+1;
};