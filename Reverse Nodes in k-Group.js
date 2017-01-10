/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head===null || head.next===null || k<2) return head;
    var newhead = new ListNode(0);
    newhead.next=head;
    var pre=newhead;
    var cnt=0;
    var pos=head;
    var t;
    var h;
    var temp;
    while(pos!==null){
        if(cnt===0){
            t=pos;
            h=pos;
            pos=pos.next;
            cnt++;
            t.next=null;
        }
        else{
            temp=pos;
            pos=pos.next;
            cnt++;
            temp.next=h;
            h=temp;
        }
        if(cnt==k){
            cnt=0;
            pre.next=h;
            t.next=pos;
            pre=t;
        }
    }
    if(cnt!==0){
        if(h===null || h.next===null){
            pre.next=h;
        }
        else{
            temp=h.next;
            h.next=null;
            while(temp!==null){
                temp2=temp;
                temp=temp.next;
                temp2.next=h;
                h=temp2;
            }
            pre.next=h;
        }
    }
    return newhead.next;
};