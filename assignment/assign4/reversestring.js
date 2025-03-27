let str="How are you sir"
let rev=""
for (i=0;i<str.length;i++)
{
    rev=str[i]+rev
}
console.log(`The reverse string is: ${rev}`)

////////////using methods.........
// let str="How are you sir"
// let arr=str.split("").reverse().join("");
// console.log(arr)
