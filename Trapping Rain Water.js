/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len=height.length;
    if(len<3) return 0;
    var left=0;
    var right=len-1;
    while(left+1<len && height[left+1]>=height[left]){
        left++;
    }
    while(right-1>=0 && height[right-1]>=height[right]){
        right--;
    }
    if(left+1>=right) return 0;
    
    var res=0;
    var highest=left;
    var i=left;
    while(i<=right){
        if(height[i]>height[highest])
            highest=i;
        i++;
    }
    ////record the water sum of left side of the highest wall
    for(i=left+1; i<highest; i++){
        if(height[i]<height[left]){
            res+=height[left]-height[i];
        }
        else{
            left=i;
        }
    }
    
    ////record the water sum of left side of the highest wall
    for(i=right; i>highest; i--){
        if(height[i]<height[right]){
            res+=height[right]-height[i];
        }
        else{
            right=i;
        }
    }
    return res;
};