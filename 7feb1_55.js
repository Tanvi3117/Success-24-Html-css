/*let string ="Regular are incrideable used by any other object"
let pattern =/e/g
let res=string.search(pattern)
console.log(res)
*/
//metacharacter (.)
/*let regex=/a..i/;
console.log(regex.test('Tanvi'))*/

//2. (\d) : matches any digits 0-9)
/*let regex=/\d+/
console.log(regex.test('abc789'))
console.log('abc789'.match(regex))*/
// let data=" how are you 45 and thankyou670h00"
//  regex=/\d+/g
// console.log(data.match('regex'))
//3. (\D) for non digits
// let data=" how are you 45 and thankyou670h00"
//  regex=/\D+/g
// console.log(data.match(regex))
//4. match any word (/w)
// let data=" how are you 45 and thankyou670h00"
// regex=/\w+/g
// console.log(data.match(regex))
//5. non word character (\W)
// let data=" how are you+ 45@ and !thankyou670h00"
// regex=/\W/g
// console.log(data.match(regex))

//6. match any whiteSpace(\s) (space tab new line)
//  let data=" how are you 45@ and !thankyou670h00"
//  regex=/\s/g
//  console.log(data.match(regex))
 //7. match anynonSpace(\S) 
//  let data=" how are you 45@ and !thankyou670h00"
//  regex=/\S/g
//  console.log(data.match(regex))
//8. (\b) word boundary (word should not be connected with any other word)
 
//   let regex=/\bcat\b/
//  console.log(regex.test('catdog'))
// //9. (\B) Non boundary (word should be connected with any other word)
 
// let regex=/\Bcat\B/
//  console.log(regex.test('cowcatdog'))
// 10. (^) matchs the starting of string
// let reg=/^tanu/
// console.log(reg.test("tanu2431@gmail.com"))
// 11. ($) match the ending of string
// let reg=/com$/
// console.log(reg.test("tanu2431@gmail.com"))
// 12. (|) : alternate (or)
// let reg =/good|bad/
// console.log(reg.test("I am very bad"))
// console.log(reg.test("i am very good"))

// 13. (|) : grouping
// let reg =/(good|bad)ing?/
// console.log(reg.test("I am very sadbad"))
// console.log(reg.test("i am very gooding"))
// 14.(+) matches one or more of the preceding characters
// let reg =/to/
// console.log(reg.test('to'))
// console.log(reg.test('toth'))
// console.log(reg.test('tooo'))
// console.log(reg.test('toom'))
// 15. (\)escape special character
// let reg=/\./
// console.log(reg.test('to.oo'))
// console.log(reg.test('toom'))


