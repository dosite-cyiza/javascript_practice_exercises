/**
 All methods related to regular Expressions
 */

 //---------------------------- Test Method (This method takes regex to string and return true or false)------------------
 console.log("Test Method")
 const string = "Hello World"
 const myRegex = /hello/
 const result = myRegex.test(string)
 console.log(result)
 // Regex is case sensitive

 //--------Matching literal string with different possibilities
 // Regex has operator  (|)
const petString = "James has a pet cat"
const regexPet = /cat| pet| dog | cow/
const regexPetResult = regexPet.test(petString)
console.log(regexPetResult)

// -----Ignore CAse while matching-----
// We include flags inorder to ignore cases (i) flag
const stringCase = "Hello World"
 const myRegexCase = /hello/i
 const resultCases = myRegexCase.test(stringCase)
 console.log(resultCases)

// -----------------------------------------------------Extract Matches -----------------------------------------------
const stringExtract = "Hello World"
 const myRegexExtract= 'World'
 const stringExtractResult = stringExtract .match(myRegexExtract)
 console.log(stringExtractResult)

//------------------- Find more than the first match---------

const stringMatch = "Twinkle Twinkle twinkle little star"
const myRegexStr = /Twinkle/gi
const stringMatchResult = stringMatch.match(myRegexStr)
console.log(stringMatchResult)

//-------------------- Math anything with  wild card period----------

const stringAny = "Have fun with them and if you have problem don't hesitate to ask for help"
const stringAnyRegex = /.em/
const stringAnyRegexResult = stringAny.match(stringAnyRegex)
console.log(stringAnyRegexResult)

//--------------------Match single character with multiple possibilities------
const stringMany = "Have fun with them and if you fin have problem don't hesitate to ask for help"
const stringManyRegex = /f[aieou]n/gi
const results = stringMany.match(stringManyRegex)
console.log(results)

//----------------match letters of the Alphabet-------------
const alphabetStr = "Hello World"
const alphabetStrRegex = /[a-z]/ig
const alphabetStrResult = alphabetStr.match(alphabetStrRegex)
console.log(alphabetStrResult)

//-------------Match Numbers and Letters of The  Alphabet-----
const numAndStrMatch = "Hello the total is 20000frw"
const numAndStrMatchRegex = /[0-9a-z]/gi

const numAndStrMatchResult = numAndStrMatch.match(numAndStrMatchRegex)
console.log(numAndStrMatchResult)
