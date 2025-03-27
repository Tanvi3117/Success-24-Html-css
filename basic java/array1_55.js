let mydata=[23,45,56,67,89,90,56,45,98]

// foreach() array loop

// function callback(ele,index,ar)
// {
//   console.log(ele,index,ar)  
// }
// mydata.forEach(callback)

//using arrow function
//mydata.forEach((ele,index,ar)=>console.log(ele,index,ar))
//..........flat()
// let mydata1=[23,45,[56,[67,89],90],[56,45,98]]
// console.log(mydata1.flat(Infinity))

// .......filter()
// function check_pass(ele)
// {
//     return ele>50
// }
// let res =mydata.filter((ele)=>ele>50)
// console.log(res)

//........... map()
// let res =mydata.map((ele)=>ele*50)
// console.log(res)
// find() the first element that statisfy or pass the condition
// let res =mydata.find((ele)=>ele>55)
// console.log(res)
// findindex() the index of element that statisfy or pass the condition
// let res =mydata.findIndex((ele)=>ele<45)
// console.log(res)

//.........some() : checks if atleast one element pass the condition.let res =mydata.findIndex((ele)=>ele<45)
// let res = mydata.some((ele)=>ele<45)
// console.log(res)
// sort()
// console.log(mydata.sort()) 
// let res = mydata.sort((x,y)=>y-x)
// console.log(res)
// ........join()
// let name1=[1,3,,"a",1,7,8,9]
// let res = name1.join("---")
// console.log(res)

// // .............tostring()
// let name1=[1,3,"a",1,7,8,9]
// // console.log(typeof(name1))
// // let res = name1.toString()
// // console.log(typeof(res))
// // console.log(res)
// //.........copywithin()
// let copy=name1.copyWithin(0,4)
// console.log(copy)
//...........array structuring
let a="IQ", b="India";
[a,b]=[b,a]
console.log(a,b)

