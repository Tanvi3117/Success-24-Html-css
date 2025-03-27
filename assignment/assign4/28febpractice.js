// let namearr =["aman","akash","umesh","girish","yogesh"]
// let newarr=namearr.filter((value)=>{
//        let res=value.match(/[a]/g)
//        return res;
       
      
// })
// console.log(newarr)

//.........stock.........

let product=[{name:"shoes",stock:33},{name:"car",stock:0},{name:"soap",stock:30},{name:"bag",stock:9},{name:"bottle",stock:0}]
let newproduct= product.filter((Name)=>{
            return Name.stock>0;
       
      
}
)
console.log(newproduct)




