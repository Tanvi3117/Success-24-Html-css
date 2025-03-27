
let getcolor =() =>
{
let rm=Math.floor(Math.random()*16777215)
let rc1 ="#" +rm.toString(16);
//document.write(rc1)
document.body.style.backgroundColor=rc1;
document.getElementById("color-code").innerText=rc1
} 
console.log(getcolor)
document.getElementById("btn").addEventListener("click",getcolor)
getcolor();