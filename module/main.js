// import {name1, password1} from "./client.js";
// import {name, password} from "./cred.js";
// // console.log(name, name1)
// // if (name==name1 && password==password1)
// // {
// //     console.log("user same")
// // }
// // else{
// //     console.log("user not same")
// // }
// document.getElementById("get").innerHTML=name
// import tan from "./calculator.js"
// import {sub,div,mul} from "./calculator.js"
// console.log(tan(12,13))
// console.log(sub(56,13))
// console.log(mul(12,13))
// console.log(div(52,13))
import {Profile} from "./calculator.js"
let emp1=new Profile({age:45,mobile:86940433333,name: "Tanvi"})
let emp2=new Profile({age:34,mobile:8694045553,name: "akash"})
document.getElementById("name").innerHTML=emp1.name
document.getElementById("age").innerHTML=emp1.age
document.getElementById("mobile").innerHTML=emp1.mobile