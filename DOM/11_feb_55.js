//DOM :Document object model
let first_h1=document.getElementsByTagName('h1')
console.log(first_h1)
for(let i=0;i<first_h1.length;i++)
{if(i==0)
{first_h1[i].innerHTML="i am first"

}
// }
// function test(){
// let get=document.getElementById('get')
// //let get1=document.getElementsByClassName("get1")[1]
// get.innerHTML="This is after apply js"
// get.style.color="red"

// }
function test(){
 
let get=document.getElementsByClassName("get")
    console.log(get)
    for(i=0;i<get.length;i++)
{get[i].innerHTML="change"
 //get[i].style.color="red"
 //get[i].classList.add('bg')
 //get[i].classList.toggle('bg')
  get[i].classList.remove('bg')
  get[i].classList.add('back')
}
    }