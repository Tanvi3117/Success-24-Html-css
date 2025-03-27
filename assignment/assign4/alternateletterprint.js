let str="How are you sir"
let newstr=str.replaceAll(" ","")
console.log(newstr)
let res=" "
 for (i=0;i<newstr.length;i++)
 { if(i%2==0)
    {
    res= res + newstr[i]
 }
}
console.log(res);