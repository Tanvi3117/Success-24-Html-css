// objects
// Preoperties, creation, accessing, modification, traversing, inbuilt methods.
//.............1. Properties : object are user defined data structure which store data of different type in the form of key:value pair.
// object key can be unique
//objects are mutable(changeable)
// index not allowed in object
//.........2.creation
// using {}
let stu_profile ={name :"Tanvi",age:26,rollno:5808, clg_name:"Manipal University", Mobile :8147064139, subject:['cs','maths','dl','communication'], address:'Noida delhi 110021',marks:[45,89,90,78],Say_hello:function()
    {return `Student Name:${this.name}`}
}
console.log(stu_profile)
// using new keyword
let stu1_profile= new Object()
stu1_profile.name="aman"
stu1_profile.age=34
stu1_profile.email="aman@gmail.com"
console.log(stu1_profile)
// accessing of object
console.log(stu_profile.Say_hello())
for(let i=0; i<stu_profile.marks.length;i++)
{ console.log(stu_profile.marks[i])}
// modification