function strLength(str){
    if(str[0]==null) return 0;
    return strLength(str.slice(0,-1)) +1;
}
let str = "abcde";
console.log(strLength(str));