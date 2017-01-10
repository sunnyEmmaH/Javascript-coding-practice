/*

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var res=[];
    var pos=[];//////stores on i row, the Q shows on pos[i] position
    var str="";    ////build a string with N of "."
    var i;
    for(i=0; i<n; i++)
        str+=".";
    solve();
    return res;
    
    function solve(){
        var j, k;
        var temp;
        
        if(pos.length===n){
            var ans=[];
            for(j=0; j<n; j++){
                temp=str;
                temp=temp.substring(0, pos[j])+"Q"+temp.substring(pos[j]+1);
                //temp[pos[j]]="Q";   //不能这样替换string中的字符！！！！！！
                ans.push(temp);
            }
            res.push(ans);
        }
        for(j=0; j<n; j++){
            for(k=0; k<pos.length; k++){
                if(pos[k]==j) break;
            }
            //console.log(k);
            if(k==pos.length){
                pos.push(j);
                if(check()){
                    solve();
                }
                pos.pop();
            }
        }
        return;
    }
    /////since I already garanteed that the newest element of pos[] is not on the same row or col with all its previous elements
    ////I just need to make sure it is also not on the diagonal with previous ones
    function check(){
        var m=pos.length;
        var i;
        for(i=0; i<m-1; i++){
            if(Math.abs(pos[m-1]-pos[i]) == m-1-i)
                return false;
        }
        return true;
    }
};