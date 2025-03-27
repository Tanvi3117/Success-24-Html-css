// let str1="This is Javascript"
        
        // let arr=str1.split("");
        // console.log(arr)
        // let new_arr=[];
        // for (let i=arr.length-1,j=0;i>=0,j<arr.length;i--,j++)
        // {
        //    new_arr[j]=arr[i];
        // }
        // console.log(new_arr)
// let str="This is javascript"
// let rev=""
// for(let i=0;i<str.length;i++)
// {
//     rev=str[i]+rev
// }
// console.log(rev)
 let str="How are you sir"
let varr=""
let Carr=""
 
 for (i=0;i<str.length;i++)
 {
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U")
        {
           varr=varr+str[i];
        }
        
        else if((str[i]>='a' || str[i]>='A') && (str[i]<='z' || str[i]<='Z') )
        {
           Carr=Carr+str[i]
        }

        
 }
console.log(`Vowels are : ${varr}`);
console.log(`Consonants are : ${Carr}`);

