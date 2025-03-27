let str="venugopaliyer"
let smallchar=str[0]
let maxchar=str[0]

let smallvalue=str.charCodeAt(0)
let largevalue=str.charCodeAt(0)

 for(i=1;i<str.length;i++)
 { let charvalue=str.charCodeAt(i)
    if(charvalue<smallvalue)
    {
        smallvalue=charvalue
        smallchar=str[i]
    }
    if(charvalue>largevalue)
    {
        largevalue= charvalue
        maxchar=str[i]
    }
    

}
console.log(`Smallest character is ${smallchar}`)
console.log(`largest character is ${maxchar}`)

