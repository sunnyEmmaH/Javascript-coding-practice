/*
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 ///////method 1 It is OK! But it is not so good!
/*var findSubstring = function(s, words) {
    var map={};
    var res=[];
    var len=s.length;
    var n=words.length;
    if(n===0) return res;
    var m=words[0].length;
    if(len<m*n) return res;
    var i=0;
    for(i=0; i<n; i++){
        if(map[words[i]]===undefined)
            map[words[i]]=1;
        else 
            map[words[i]]++;
    }
    for(i=0; i<=(len-m*n); i++){
        var temp=s.substring(i, i+m);
        if(map[temp]!==undefined){
            if(check(s.substring(i, i+m*n))){
                res.push(i);
            }
        }
    }
    return res;
    
    
    function check(s){
        var map2={};
        for(j=0; j<s.length; j=j+m){
            var sub=s.substring(j, j+m);
            if(map[sub]===undefined)
                return false;
            if(map2[sub]!==undefined){
                map2[sub]++;
                if(map2[sub]>map[sub])
                    return false;
            }
            else
                map2[sub]=1;
        }
        return true;
    }
};*/
/////////////In every case, it is not worse than method 1, And it is exetremly good for some circumstances
var findSubstring = function(s, words) {
    var map={};
    var res=[];
    var len=s.length;
    var n=words.length;
    if(n===0) return res;
    var m=words[0].length;
    if(len<m*n) return res;
    var i;
    for(i=0; i<n; i++){
        if(map[words[i]]===undefined)
            map[words[i]]=1;
        else
            map[words[i]]++;
    }
    for(i=0; i<m; i++){
        check(i);
    }
    return res;
    
    function check(start){
        var map2={};
        var i; 
        var sub;
        var flag=true;
        for(i=0; i<m*n; i=i+m){
            sub=s.substring(i, i+m);
            if(map2[sub]===undefined)
                map2[sub]=1;
            else
                map2[sub]++;
            if(map[sub]===undefined || map[sub]<map2[sub])
                flag=false;
        }
        if(flag===true) res.push(start);
        while(i<len){
            sub=s.substring(i, i+m);
            
        }
    }
};