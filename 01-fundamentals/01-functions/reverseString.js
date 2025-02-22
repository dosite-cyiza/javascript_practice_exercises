/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/
const reversedString = (str) =>{
    return str.split('').reverse().join('')
}
console.log(reversedString('word'))