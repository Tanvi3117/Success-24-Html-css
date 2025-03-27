let str="qwertyuiopasdfghjklzxcvbnm"
let arr=str.split("")
let t="0"
for (i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length-i;j++)
    { 
        if(arr[j]>arr[j+1])
        {  
            t=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=t
        }
    }
}
let newarr=arr.join("")
console.log(newarr);

