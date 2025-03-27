//...............using regex..........
//  let str="How are you sir"
// let Strv=/[aeiou]/gi
// let vowels=str.match(Strv)
// console.log(`Vowels are :${vowels}`);
// let Strc=/[^aeiou\s]/gi
// let consonants =str.match(Strc)
// console.log(`Consonants are : ${consonants}`);
//...............using for loop...........

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