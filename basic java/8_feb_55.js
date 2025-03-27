// let n=12;
// let count=0; 
// for (let i=1;i<=n;i++)
// {if(n%i==0)
//    {console.log(`Multiple of ${n} :${i}`)
//     count+=1
// }
// }
// console.log(`Total multiple:${count}`)

// find all vowels from an array ['aman', 'abhay,'rohan,'ankit']
let data = ['aman', 'abhay','rohan','ankit'].toString().split()
console.log(data.length)
console.log(data.toString().split())
for(let i of data.toString().toLowerCase())
 {if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u")
    {console.log(i)}
}