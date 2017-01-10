/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
/////////////////ÌÖÂÛÇé¿ö£º (()), ()(), ()(());
var longestValidParentheses = function(s) {
    var len=s.length;
    if(len<2) return 0;
    var res=0;
    var dp=new Array(len);
    dp.fill(0); ///valid string length ends at i(included);
    for(i=1; i<len; i++){
        if(s[i]=='(')
            continue;
        j=i-1-dp[i-1];
        if(j>=0 && s[j]=='(') 
            dp[i]=dp[i-1]+2;
        //else if(j==i-1 && s[j]=='(')
          //  dp[i]=2;
        else{
            dp[i]=0;
        }
        if(dp[i]>0 && j-1>=0 && dp[j-1]>0)
            dp[i]+=dp[j-1];
        res=Math.max(res, dp[i]);
    }
    return res;
};