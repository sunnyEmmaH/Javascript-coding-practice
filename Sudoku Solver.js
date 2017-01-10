/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solveOne(board, 0);
    return;
    
    function solveOne(board, x){
        if(x >= 81) 
            return true;
        var i=Math.floor(x/9);
        var j=x%9;
        var m;
        if(board[i][j]!=".")
            return solveOne(board, x+1);
        for(m=1; m<=9; m++){
            board[i][j]=m.toString();
            if(checkValid(board, i, j) && solveOne(board, x+1))
                return true;
            board[i][j]='.';
        }
        return false;
    }
    function checkValid(board, i, j){
        var c=board[i][j];
        var k;
        for(k=0; k<9; k++){
            if((k!=i && board[k][j]==c) || (k!=j && board[i][k]==c))
                return false;
        }
        var starti=Math.floor(i/3)*3; 
        var startj=Math.floor(j/3)*3;
        var k1;
        for(k=starti; k<starti+3; k++){
            for(k1=startj; k1<startj+3; k1++){
                if(board[k][k1]==c && (k!=i||k1!=j))
                    return false;
            }
        }
        return true;
    }
};