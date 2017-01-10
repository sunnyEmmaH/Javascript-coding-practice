/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 //////////////complexity O(n*2)!!time limit exceeded!!!!
/*var jump = function(nums) {
    var len=nums.length;
    if(len<2) return 0;
    if(len==2) return 1;
    var dp=new Array(len-1);
    var i;
    var j;
    for(i=len-2; i>=0; i--){
        dp[i]=Math.pow(2, 32)-1;
        if(dp[i]>0){
            if(i+nums[i]>=len-1) 
                dp[i]=1;
            else{
                for(j=i; j<=nums[i]+i; j++){
                    if(dp[i]==2) break;
                    dp[i]=Math.min(1+dp[j], dp[i]);
                }
            }
        }
    }
    console.log(dp);
    return dp[0];
};*/
//O(n) time complexity
var jump = function(nums) {
    var len=nums.length;
    if(len<2) return 0;
    if(len==2) return 1;
    var reach=0;
    var i=0;
    var step=0;
    var lastreach;
    while(reach<len-1){
        lastreach=reach;
        while(i<=lastreach){
            reach=Math.max(reach, nums[i]+i);
            i++;
        }
        step++;
    }
    return step;
};