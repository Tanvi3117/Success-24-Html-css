// let h1=document.createElement('h1')
// h1.innerHTML="This is element created by js"
// document.body.append(h1)
// document.onclick.append(h1)
// console.log(h1)
// let first_div=document.createElement('first_div')
// first_div.innerHTML="This is bew content"
// first_div.append(h1)
// document.body.append(first_div)
let nav=document.createElement('nav')
document.body.append(nav)
console.log(nav)
//create first div
let first_div=document.createElement('div')
first_div.className="logo"
nav.append(first_div)

let h1=document.createElement('h1')
h1.innerHTML="Success<span>24</span>"
first_div.append(h1)
// 2nd div
let second_div=document.createElement('div')
second_div.className="menu"
nav.append(second_div)
let ul=document.createElement('ul')
let li_1=document.createElement('li')
let li_2=document.createElement('li')
let li_3=document.createElement('li')
let li_4=document.createElement('li')

li_1.innerHTML=`<a>Home</a>`
li_2.innerHTML=`<a>about</a>`
li_3.innerHTML=`<a>contact</a>`
li_4.innerHTML=`<a>address</a>`
ul.append(li_1, li_2,li_3,li_4)
second_div.append(ul)



// for (i=0;i<5;i++)
// {
// let h2 =document.createElement('h2')
// }

let a

