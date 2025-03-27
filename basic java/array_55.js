//------------------Array.......................................
// ---------------Properties of array
// //1. array is a data structure used to store multiple elements of different types in a singe variable
//2.Array is indexed means element store in a same order.
//3. Array is hetrogeneous and homogeneous.
//4. Array has dynamic memory management
//5. Array have many inbuilt methods used for easy manipulation

//............. creation of array...........

// let my_data= new Array(1,3,4,6,"dev",true,2,9)
// console.log(my_data)
// console.log(my_data1)
//............accessing of array..............
// let my_data=[1,3,4,6,"dev",true,21,9]
// console.log(my_data[5])
// size=my_data.length
// console.log(size)
// console.log(my_data[size-1])
// last index =size-1
//...................modification of array.............
// let my_data=[1,3,4,6,4,"dev",true,21,9]
// my_data[1]="how are you"
// console.log(my_data)
//-------------traversing of Array---------------
//let size= my_data.length
// for(let i=0;i<size;i++)
// {console.log(`${my_data[i]}=${i}`)

// }
// //...for of
//  for(i of my_data)
// {console.log(i)}
 //..for in
//  for(i in my_data)
//     {console.log(my_data[i])}

//..........while loop in array
// let set=0
// while(set<size){
//     console.log(my_data[set])
//     set+=1
// } 
//using do while
// let set=0
// do{
//    console.log(set)
//    set+=1
// }while(set<=10)
// ------------In-builted method of array
//1. push()
//let data=800

// my_data.push([3,4,5])
// my_data.push(data,800)
// console.log(my_data)
//2.unshift()
// my_data.unshift("ataTransfe", 3)
// console.log(my_data)
//3. shift() : remove element start from the array
// my_data.shift(800)
// console.log(my_data)
//4. pop()
// let my_data= [1,3,4,6,"dev",true,2,9]
// my_data.pop()
// console.log(my_data)

//5. Concat()

// let Arr=my_data.concat(new_data)
// console.log(Arr)
// // 6. reverse()
// let res=Arr.reverse()
//  console.log(res)
// includes()
// let my_data=[1,3,4,6,"dev",true,21,9]
// let new_data=[78,56,"tanvi"]
// let Arr=my_data.concat(new_data)
// console.log(Arr)
// let res=Arr.includes(6)
// console.log(res)
// 7. indexof(element, index)

// let res=Arr.indexOf(4,5)
// console.log(res)
let data=["a","b","c","d","a"]
let res=data.indexOf("b")
console.log(res)

// let res=my_data.slice(1,6)
// console.log(res)
//.............slice(start,delecount, items)(replace and insertion)
// let my_data=[1,3,4,6,4,"dev",true,21,9]
// let res=my_data.splice(1,3,5)
// console.log(res)
// console.log(my_data)
//foreach()
//filter()
//map()
//callback
// let my_arr=[1,2,3,4,5,6,7,8,9]

// //............Array de-structuring
// //1. basic strcturing
// // let [e1,,,e4]=my_arr // . skiping
// // console.log(e1)
// //console.log(e3)
// //console.log(e4)
// // skkipping 
// let [e1,...e4]=my_arr // . skiping
// console.log(e1)
// //console.log(e3)
// console.log(e4)

//Array structuring
