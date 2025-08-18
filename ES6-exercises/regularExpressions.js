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



