/* There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). 
Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var k=nums1.length+nums2.length;
    if(k%2===1){
        k=Math.floor(k/2);
        return findKth(nums1, 0, nums2, 0 ,k+1);
    }
    else{
        k=k/2;
        return (findKth(nums1, 0, nums2, 0, k+1)+findKth(nums1, 0, nums2, 0, k))/2;
    }
};

var findKth = function(nums1, i, nums2, j, k){
    if(k===0) return 0;
    var len1=nums1.length;
    var len2=nums2.length;
    ////make sure valid nums1 is longer(no shorter than)
    if(len1-i<len2-j)
        return findKth(nums2, j, nums1, i, k);
    if(j==len2) return nums1[i+k-1];
    if(k==1) return Math.min(nums1[i], nums2[j]);
    var p2=Math.min(j+Math.floor(k/2), len2);
    var p1=i+k-(p2-j);
    if(nums1[p1-1]==nums2[p2-1]){
        return nums1[p1-1];
    }
    else if(nums1[p1-1]<nums2[p2-1]){
        return findKth(nums1, p1, nums2, j, k-(p1-i));
    }
    else{
        return findKth(nums1, i, nums2, p2, k-(p2-j));
    }
};