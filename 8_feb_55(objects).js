// // // objects
// // // Preoperties, creation, accessing, modification, traversing, inbuilt methods.
// // //.............1. Properties : object are user defined data structure which store data of different type in the form of key:value pair.
// // // object key can be unique
// // //objects are mutable(changeable)
// // // index not allowed in object
// // //.........2.creation
// // // using {}
// let stu_profile ={name :"Tanvi",age:26,rollno:5808, clg_name:"Manipal University", Mobile :8147064139, subject:['cs','maths','dl','communication'], address:'Noida delhi 110021',marks:[45,89,90,78],Say_hello:function()
//     {return `Student Name:${this.name}`}
// }
// console.log(stu_profile)
// // // using new keyword
// // let stu1_profile= new Object()
// // stu1_profile.name="aman"
// // stu1_profile.age=34
// // stu1_profile.email="aman@gmail.com"
// // console.log(stu1_profile)
// //................... accessing of object
// // console.log(stu_profile.Say_hello())
// // for(let i=0; i<stu_profile.marks.length;i++)
// // { console.log(stu_profile.marks[i])}
// // .................modification

// //stu_profile.clg_code="clg-123"

// // console.log(stu_profile)
// // Object.freeze(stu_profile)
// // stu_profile.clg_name="LPU"
// // console.log(stu_profile)
// // let emp_profile ={name:"Tanvi",age:32,salary:60000,designation : "software developer", city :"noida", Hello:function() {return`Employee Salary : ${this.salary}`} }
// // console.log(emp_profile)
// // function test()
// //         { console.log(this)}
// //         test()
// // console.log(stu_profile)
// // Object.seal(stu_profile) // can update old data nut cannot add
// // stu_profile.clg_name="LPU"
// // stu_profile_gender="female"
// // console.log(stu_profile)
// // show keys of object
// // let key = Object.keys(stu_profile)
// // console.log(key)
// // let value = Object.values(stu_profile)
// // console.log(value)
// // // new entries
// // let data = [["name","ajay"],['age','45']]
// // let obj=Object.fromEntries(data)
// // console.log(data)
// // // ..............traversing

// // let key = Object.keys(stu_profile)
// // for(let i of key)
// // {console.log(i)}

// // let data = Object.values(stu_profile)
// // for(let i of data)
// // {console.log(i)}
// // // enteries (key with value)
// // let data1 = Object.entries(stu_profile)
// // console.log(data1)
// // //.... or 
// // for (let[v,k] of [data,key])
// // {console.log(v,k)}
// //create an object of student profile by taking data from user

let student_profile ={name :"Tanvi",age:26,rollno:5808, clg_name:"Manipal University", Mobile :8147064139, subject:['cs','maths','dl','communication'], address:'Noida delhi 110021',marks:[45,89,90,78], show:function(){
    let arr=()=>{console.log(this.name)
}
}
}
// Object.defineProperty(stu_profile,'name',{writable:false}) // restricting praticular data of object
//     console.log(stu_profile)
//     stu_profile.name="ankit"
//     console.log(stu_profile)

//     let obj1={name:'aman'}
//     let obj2={age:40, roll:9869}
//     Object.assign(obj1,obj2)
//     console.log(obj1)
    //....prototypes
    // let person_prototype={
    //     namaste(){
    //         return `Namaste ${this.name}`
    //     }
    // // }
    // let Person1=Object.create(person_prototype)
    // Person1.name="Tanvi"
    // console.log(Person1.namaste())
    // let Person2=Object.create(person_prototype)
    // Person2.name="shikha"
    // console.log(Person2.namaste())
    // let Person3=Object.create(person_prototype)
    // Person3.name="Akash"
    // console.log(Person3.namaste())


    // function outer\(lexical scope : It means that a fuction remembers the variables and function from the place it was define(parent scope) not from where it is called)
//     function outer()
    
//     {let name1="Abhay"
//     function inner()
//     {console.log(name1)

//     }inner()
//  } outer()

