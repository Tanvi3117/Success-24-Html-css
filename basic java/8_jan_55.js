// conditional statement
// if else
// if else if else
// multiple if else
// nested if else (chaining)

// // let age=15;
// // if(!(age>=18))
// // { console.log("eligible for Voting")

// // }
// // else {console.log("Not eligible for Voting") }


// // write a program to check the divisiblity of 4 and 5
// // let num=40;
// // if((num%4==0) && (num%5==0))
// // { console.log("its divisible")

// // }
// // else {console.log("its not divisible") }
// //write a program to check the number is odd or even
// // let num=37;
// // if(num%2==0)
// // { console.log("Even Number")

// // }
// // else {console.log("Odd Number") }
// // write a program to find out last digit of a number, like example 23456 is 6
// // let num=3779;
// // let res = num%10
// // console.log(res)

// // ------------------multiple if else.........
// let n=124;
// if (n>100)
// {if (n%2==0 )
//     {console.log("even number")}
//    if (n%3==0)
//     {console.log("divisible by 3")}
// }
// else { console.log("number greater than 100")}

// nested if else
// let num=34
// if(num>=30)
// {console.log("hello")
//     let s=131
//     if(s<100)
// {console.log("square")}
//     else{console.log("not square")}
// }  
// //     else{console.log("thankyou")}

//     //write a program to convert celcious to ferehniet
//     let ctemp=37.8
//  let f_temp =(ctemp*9/5)+32;
//  console.log(f_temp)
 //write a program to find middle number from three number
 let n1=100
 let n2=50      
 let n3=90
 if((n1>n2)&&(n2>n3)||(n1<n2)&&(n3>n2))
 { 
 console.log(n2);
}

else{ 
if ((n1>n3)&&(n3>n2)||(n1<n3)&&(n3<n2))
{ console.log(n3);}
else{ console.log(n1);

}
 }