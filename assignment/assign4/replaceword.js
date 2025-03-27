let str="javascript developer javascript engineer javascript holder"
let replaceword="javascript"
let newword="python"
let res=""
let newstr=str.split(" ");

console.log(newstr)
for(let i=0;i<newstr.length;i++)
{
if(newstr[i]===replaceword)
{    res+=newword+" ";
}
else{
    res+= newstr[i]+" ";

}
}
console.log(res)
// let newstr=str.replaceAll("javascript","python")
// console.log(newstr)