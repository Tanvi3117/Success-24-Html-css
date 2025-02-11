// //...........ARROW FUNCTIONS(ANONYMOUS FUNCTION)
//it is modern way of writing function in JS
//arrow function is faster
// //HIGER ORDER FUNCITION hdf():

// let hello_function=() =>{return "I am good"}
// console.log(hello_function())

// // odd even number
// let odd_even =(num)=>{ if (num%2==0)
// { return"even number"}
// else{ return"odd number"}
// }
// console.log(odd_even(10))

// switch statement
// let input ="3"
// switch(input){
//     case"1":
//     console.log("Monday")
//     break;
//     case"2":
//     console.log("Tuesday")
//     break;
//     default:
//         console.log("Something is wrong")
// }
// Arrow function for all four operations
let n1=40
let n2=5
let Addition =(n1,n2)=>{ 
    return n1+n2}
let substraction =(n1,n2)=>{ 
        return n1-n2}
let multiplication =(n1,n2)=>{ 
            return n1*n2}
let division =(n1,n2)=>{ 
                return n1/n2}   

   let input ="5";
switch(input){
    case"1":
    console.log(Addition(n1,n2))
    break;
    case"2":
    console.log(substraction(n1,n2))
    break;
    case"3":
    console.log(multiplication(n1,n2))
    break;
    case"4":
    console.log(division(n1,n2))
    break;
    default:
        console.log("Something is wrong")
} 