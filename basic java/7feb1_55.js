// let string ="Regular are incrideable used by any other object"
// let pattern =/e/gi

// let res=string.search(pattern)
// console.log(res)

//metacharacter (.)
// let regex=/a..i/;
// console.log(regex.test('Tanvi'))

// 2. (\d) : matches any digits 0-9)
// let regex=/\d+/g
// // console.log(regex.test('abc78a9@68'))
// console.log('ab6c 78v9A 78865'.match(regex))
// let data=" how are you 45 and thankyou670h00"
//  let regex=/\d+/g
// console.log(data.match(regex))
//3. (\D) for non digits
// let data=" how are you 45 and thankyou@670h00"
//  regex=/\D/g
// console.log(data.match(regex))
//4. match any word (/w)
// let data=" how are you 45 and @thankyou670h00"
// regex=/\w+/g
// console.log(data.match(regex))
// 5. non word character (\W)
// let data=" how are you+++ 45@ and !thankyou670h00"
// regex=/\W+/g
// console.log(data.match(regex))

//6. match any whiteSpace(\s) (space tab new line)
//  let data=" how are you 45@      and   !thankyou670h00"
//  regex=/\s+/
//  console.log(data.match(regex))
 //7. match anynonSpace(\S) 
//  let data=" how are you 45@ and !thankyou670h00"
//  regex=/\S+/g
//  console.log(data.match(regex))
// //8. (\b) word boundary (word should not be connected with any other word)
//  let data=" how yare you 45@ and !thankyou670h00"
//   let regex=/are\b/
//  console.log(data.match(regex))
// //9. (\B) Non boundary (word should be connected with any other word)
 
// let regex=/\Bcat\B/
//  console.log(regex.test(' @cat0dog'))
// 10. (^) matchs the starting of string
// let reg=/^tanu/
// console.log("tanu2431@gmail.com".match(reg))
// // 11. ($) match the ending of string
// let reg=/com$/
// console.log(reg.test("tanu2431@gmail.com"))
// 12. (|) : alternate (or)
// let reg =/good|bad/
// console.log(reg.test("I am very rude"))
// console.log(reg.test("i am very good"))

// 13. (|) : grouping
// let reg =/(good|bad)ing?/
// console.log(reg.test("I am very sading"))
// console.log(reg.test("i am very gooding"))
// 14.(+) matches one or more of the preceding characters
// let reg =/to/
// console.log(reg.test('to'))
// console.log(reg.test('toth'))
// console.log(reg.test('tooo'))
// console.log(reg.test('toom'))
// 15. (\)escape special character
// let reg=/\o/g
// console.log(reg.test('tooo'))
// console.log(('to@o@m').match(reg))
//BRACKETS
//1. matches any character inside bracket
// let reg =/[iit]/g
// let string1="this is kite"
// console.log(reg.test(string))
// console.log(string1.match(reg))
// //2. matches any character inside bracket
// let reg =/[a-j]/g
// let string1="this is kite"
// console.log(reg.test(string1))
// console.log(string1.match(reg))
// // //3. matches any character inside bracket
// let reg =/[a-z0-9]/g
// let string="th12is is ki00te"
// console.log(reg.test(string))
// console.log(string.match(reg))
//4. not matches any character inside bracket
// let reg =/[ ]/g
// let string="th12is is  ki00te"
// console.log(reg.test(string))
// console.log(string.match(reg).length)

//5. matches n time
let reg =/k{2}/g
let string="kfkfkk+ the h hhhhhhkf   is"
console.log(string.match(reg))
// create a pattern for validate user name min=15 max=3, alphanumeric,not symbol if not means wrong user name, mix captial and small both
// let username ="Tanak@123"
// let res=/[a-z A-Z 0-9]{2,14}/g
//     if (res.test(username)){
//     console.log(username)
// } else {
//     console.log("Invalid User")
// }

