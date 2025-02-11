//function
//1. every function has their own purpose
//2. function make organised code based on that it is easy to debug
// //3.function is resuable to perform task

// //.....types of function
// //1. user-define function
// //2.inbuilt_function(methods)

// //... parameters and arguments
// categories of user define function
// //1. Take nothing return nothing
// //2. Take nothing return something
// //3. Take something return nothing
// //4 Take something return something

// // filter(), map()
// //function scoping
// //function hoisting
// //function closures (nested functions)
// //.....................function...........
// //let Btn = document.getElementById(btm)//
// function hello() // define function
// {document.write(`<h1>functions in java script</h1>`)

// }
// hello(); //function calling
// // add numbers
// function add() // define function
// {
//     let n1=45
//     let n2=17
// let res=n1+n2

// document.write(`<h1>Addition of numbers is ${res}`)
// }
// add();
// // substraction
// function Substraction() // define function
// {
//     let n1=45
//     let n2=17
// let res=n1-n2

// document.write(`<h1>Substraction of numbers is ${res}`)
// }
// Substraction();
// // multiplication
// function multiplication() // define function
// {
//     let n1=45
//     let n2=17
// let res=n1*n2

// document.write(`<h1>Multiplication of numbers is ${res}`)
// }
// multiplication();
// //division
// function Division() // define function
// {
//     let n1=45
//     let n2=9
// let res=n1/n2

// document.write(`<h1>Multiplication of numbers is ${res}`)
// }
//Division();
//.....square 
// function square(num) // define function
// {

// let res=num**2

// //document.write(`<h1>Square of numbers is ${res}`)
// console.log(`square of number is ${res}`)
// }
// square(55);
/*.parameters and agruments*/

// function cal_numberpower(n1=0,n2=0){
// console.log(n1**n2)
// }

// cal_numberpower(4,3)
// char is vowel of not
// function check_vowel(char){
//     if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u")
//     {console.log(`This is vowel char ${char}`)}

// else
// {
//     console.log(`This is  not vowel char ${char}`)}

// }check_vowel('a')
//................return keyword............//
function add(total_cash, used_cash){
return total_cash-used_cash


}
let total_cash=400
let used_cash=50
let data=add(total_cash,used_cash)
console.log(data)