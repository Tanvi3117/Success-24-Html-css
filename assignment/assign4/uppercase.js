// let str="How are you sir"
// let Str1=str.toUpperCase();
// console.log(Str1);
///////without function
let str1="How are you sir"
let res=""
for(i=0;i<str1.length;i++)
{ let char=str1[i]
    if(char>='a' && char<='z')
    {
        char=String.fromCharCode(char.charCodeAt()-32)
    }
    res+=char
}
console.log(res)
