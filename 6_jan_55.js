let first_name ="Tanvi"
let last_name = "Goyal"
let mob_num="8147064139"
let string = "Honest person are 789 and50 fool are wise40ly"
let full_name = first_name+" "+last_name
console.log(full_name)
console.log(typeof(full_name))
console.log(typeof(mob_num))
console.log(first_name+" "+mob_num)
let pattern =/a/g
let res=full_name.search(pattern)
console.log(res)
let regex=/a.v/;
console.log(regex.test(full_name))
//2. (\d) : matches any digits 0-9)
//let numbermatch=/\d+/ig
//console.log(numbermatch.test(full_name))
//console.log(string.match(numbermatch))
//console.log(numbermatch.test(string))
//conversion
//let resultcon =parseFloat(mob_num)
let resultcon =parseInt(mob_num)
console.log(typeof(mob_num))
console.log(typeof(resultcon))
// string to number
let res1 = Number(mob_num)
console.log(typeof(res1))
console.log("--multiline string--")
let intro =`A first-party GitHub OAuth application 
(Git Credential Manager) with gist, repo, and workflow scopes was 
recently authorized to access your account.`
console.log(intro)
// boolean data type
console.log(true+false)
console.log(true+true)
// non digit
// let numbermatch=/\D+/
// console.log(numbermatch.test(full_name))
// console.log(string.match(numbermatch))
// console.log(numbermatch.test(string))
// any word \w or non word \W or space \s or nonspace \S or \b word boundary
//  for connected word (\B)
// let numbermatch=/\S+/g
// let numbermatch1=/\Bool/ig
// console.log(string.match(numbermatch1))
// console.log(numbermatch1.test(string))
//  matches starting of string (^) and /  matches ending of string (^)
let numbermatch1=/ly$/
console.log(string.match(numbermatch1))
console.log(numbermatch1.test(string))