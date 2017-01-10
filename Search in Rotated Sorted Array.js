/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 ////method1:find pivot first, then find the target
/*var search = function(nums, target) {
    var len=nums.length;
    if(len===0 || (len==1 && nums[0]!=target)) return -1;
    var res;
    if(nums[0]<nums[len-1]){
        if(nums[0]<=target && nums[len-1]>=target)
            res=searchsorted(nums, target, 0, len-1);
        else
            res=-1;
    }
    else{
        ///find the pivot(largest value's index)
        var left=0;
        var right=len-1;
        var mid;
        while(left<right-1){
            mid=left+Math.floor((right-left)/2);
            if(nums[mid]>nums[0])
                left=mid;
            else
                right=mid;
        }
        if(nums[0]<=target && nums[left]>=target)
            res=searchsorted(nums, target, 0, left);
        else if(nums[right]<=target && nums[len-1]>=target)
            res=searchsorted(nums, target, right, len-1);
        else
            res=-1;
    }
    return res;
};

var searchsorted = function(nums, target, left, right){
    if(nums[left]==target) return left;
    if(nums[right]==target) return right;
    var mid;
    while(left<right-1){
        mid=left+Math.floor((right-left)/2);
        if(nums[mid]==target)
            return mid;
        if(nums[mid]<target)
            left=mid;
        else
            right=mid;
    }
    return -1;
};*/
////method2: better!!
var search = function(nums, target) {
    var len=nums.length;
    if(len===0) return -1;
    var left=0, right=len-1;
    if(nums[left]==target) return left;
    if(nums[right]==target) return right;
    var mid;
    while(left<right-1){
        mid=Math.floor((right+left)/2);
        if(nums[mid]==target) return mid;
        if(nums[left]<nums[mid]){  ///pivot is on the right side
            if(target>nums[left] && target<nums[mid])
                right=mid;
            else
                left=mid;
        }
        else{                    /////pivot is on the left
            if(target>nums[mid] && target<nums[right])
                left=mid;
            else
                right=mid;
        }
    }
    if(nums[left]==target) return left;
    if(nums[right]==target) return right;
    return -1;
};