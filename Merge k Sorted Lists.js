/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len=lists.length;
    if(len===0) return null;
    if(len==1) return lists[0];
    var left=0;
    var right=len-1;
    while(right!==0){
        left=0;
        while(left<right){
            lists[left]=merge2lists(lists[left], lists[right]);
            left++;
            right--;
        }
    }
    return lists[0];
};

var merge2lists = function(l1, l2){
    var newhead=new ListNode(0);
    var cur=newhead;
    while(l1 || l2){
        if(l1===null){
            cur.next=l2;
            break;
        }
        if(l2===null){
            cur.next=l1;
            break;
        }
        if(l1.val<=l2.val){
            cur.next=l1;
            l1=l1.next;
        }
        else{
            cur.next=l2;
            l2=l2.next;
        }
        cur=cur.next;
    }
    return newhead.next;
};