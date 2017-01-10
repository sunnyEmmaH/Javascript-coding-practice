/*
Implement wildcard pattern matching with support for '?' and '*'.


'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") ¡ú false
isMatch("aa","aa") ¡ú true
isMatch("aaa","aa") ¡ú false
isMatch("aa", "*") ¡ú true
isMatch("aa", "a*") ¡ú true
isMatch("ab", "?*") ¡ú true
isMatch("aab", "c*a*b") ¡ú false
*/


 /////method 1:
/*"abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb"
"**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb" excede time limit£¡£¡£¡*/
/*var isMatch = function(s, p) {
    var ls=s.length;
    var lp=p.length;
    var i=0, j=0;
    while(j<lp){
        if(i>=ls){
            while(j<lp){
                if(p[j]!='*'){
                    return false;
                }
                j++;
            }
        }
        if(s[i]==p[j] || p[j]=='?'){
            i++;
            j++;
        }
        else if(p[j]!='*'){
            return false;
        }
        else{
            while(j<lp && p[j]=='*'){
                j++;
            }
            while(i<ls){
                if(isMatch(s.substring(i), p.substring(j)))
                    return true;
                else i++;
            }
        }
    }
    if(i>=ls)
        return true;
    return false;
};*/
//////method 2: greedy alg
var isMatch = function(s, p){
    var ls=s.length;
    var lp=p.length;
    var i=0, j=0, ends=ls-1, endp=lp-1;
    var nextstar;
    var needle;
    while(endp>=0 && p[endp]!='*'){
        if(ends>=i && (s[ends]==p[endp] || p[endp]=='?')){
            ends--;
            endp--;
        }
        else return false;
    }
    if(endp<0){
        if(ends<0)
            return true;
        else 
            return false;
    }
    while(i<=ends){
        if(p[j]==s[i] || p[j]=='?'){
            j++;
            i++;
        }
        else if(p[j]!='*'){
            return false;
        }
        else{
            while(p[j]=='*' && j<=endp){
                j++;
            }
            if(j>endp) return true; /////reach last, and last if a star
            nextstar=j;
            while(p[nextstar]!='*')
                nextstar++;
            needle=check(s.substring(i, ends+1), p.substring(j, nextstar));
            if(needle==-1) return false;
            else{
                i=i+needle+(nextstar-j);
                j=nextstar;
            }
            
        }
    }
    while(j<=endp){
        if(p[j]=='*')
            j++;
        else 
            return false;
    }
    return true;
    
    
    function check(hay, need){
        var n=hay.length;
        var len=need.length;
        var i;
        var j, k;
        for(i=0; i<=n-len; i++){
            if(hay[i]==need[0] || need[0]=='?'){
                k=i+1;
                j=1;
                while(j<len && (hay[k]==need[j] || need[j]=='?')){
                    k++;
                    j++;
                }
                if(j>=len) return i;
            }
        }
        return -1;
    }
};