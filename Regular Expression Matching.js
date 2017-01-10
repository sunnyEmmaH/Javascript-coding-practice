/* 
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") ¡ú false
isMatch("aa","aa") ¡ú true
isMatch("aaa","aa") ¡ú false
isMatch("aa", "a*") ¡ú true
isMatch("aa", ".*") ¡ú true
isMatch("ab", ".*") ¡ú true
isMatch("aab", "c*a*b") ¡ú true
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 //eg:s="abc", p=".*"  result is "true"
 ///method1:
/*var isMatch = function(s, p) {
    var sl=s.length;
    var pl=p.length;
    var i=0, j=0;
    while(j<pl){
        if(j==pl-1 || j+1<pl && p[j+1]!=='*'){
            if(i<sl && (p[j]===s[i] || p[j]==='.')){
                i++;
                j++;
            }
            else{
                return false;
            }
        }
        else{         //p[j+1]=='*'
            while(i<sl && (s[i]==p[j] || p[j]=='.')){
                if(isMatch(s.substring(i), p.substring(j+2)))
                    return true;
                i++;
            }
            return isMatch(s.substring(i), p.substring(j+2));
        }
    }
    if(i==sl) return true;
    return false;
};*/

//////method2: DP
var isMatch = function(s, p) {
    var ls=s.length;
    var lp=p.length;
    var map=new Array(ls+1);
    var i, j;
    for(i=0; i<=ls; i++){
        map[i]=new Array(lp+1);
        map[i].fill(false);
    }
    map[0][0]=true;
    
    for(i=0; i<=ls; i++){
        for(j=1; j<=lp; j++){
            if(p[j-1]!=='*'){
                if(i>0 && (p[j-1]=='.' || p[j-1]==s[i-1]) && map[i-1][j-1])
                    map[i][j]=true;
            }
            else{
                if(map[i][j-1] || j>=2 && map[i][j-2])  /////#* represent zero or one character
                    map[i][j]=true;
                else if(i>0 && map[i-1][j] && (s[i-1]==p[j-2] || p[j-2]=='.')) /////#* represent more than one characters
                    map[i][j]=true;
            }
        }
    }
    return map[ls][lp];
};