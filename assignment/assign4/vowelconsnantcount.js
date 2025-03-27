//...............using regex..........
//  let str="How are you sir"
// let Strv=/[aeiou]/gi
// let vowels=str.match(Strv)
// console.log(`Vowels are :${vowels.length}`);
// let Strc=/[^aeiou\s]/gi
// let consonants =str.match(Strc)
// console.log(`Consonants are : ${consonants.length}`);
//...............using for loop...........

let str="How are you sir"
let varr=0
let Carr=0
 
 for (i=0;i<str.length;i++)
 {
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U")
        {
           varr++;
        }
        
        else if((str[i]>='a' || str[i]>='A') && (str[i]<='z' || str[i]<='Z') )
        {
           Carr++;
        }

        
 }
console.log(`Number of Vowels are : ${varr}`);
console.log(`Number of Consonants are : ${Carr}`);