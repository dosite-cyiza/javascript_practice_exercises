/* Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
 */
const replaceVowels = (s) =>{
 return s.replace(/[aeiouAEIOU]/g,'!')
}
console.log(replaceVowels('Hello'))