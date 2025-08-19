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

//-------------------- Match anything with  wild card period----------

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

//--------------------Match single character not specified ----------------------------------------------------------------
 const mySentence = "Hello 1 and Hello 2"
 const mySentenceRegex = /[^0-9aiueo]/gi
 const mySentenceRegexResult = mySentence.match(mySentenceRegex)
 console.log(mySentenceRegexResult)

 // ------------------ Match character that occur one or more time---------

 const repeatingStr = "Mississipi"
 const repeatingStrRegex = /s+/gi
 const repeatingStrResult = repeatingStr.match(repeatingStrRegex)
 console.log(repeatingStrResult)

 // -----------------Match character that occur zero or more time-------------

 const soccerWord = "gooooal!"
 const soccerWordRegex = /go*/g
 const soccerWordResult = soccerWord.match(soccerWordRegex)
 console.log(soccerWordResult)

 // ----------------------Find characters with lazy matchings ---------------------------------------------------

  const sentenceLazy= "<h1>gooooal!</h1>"
 const sentenceLazyRegex = /<.*?>/
 const sentenceLazyRegexResult = sentenceLazy.match(sentenceLazyRegex)
 console.log(sentenceLazyRegexResult)

 // -----------------------Find one or more criminals in a hunt---------------
 const crowd = "P1P2P3P4P5P6CCCP7P8P9"
 const crowdRegex = /C+/
 const crowdRegexResult = crowd.match(crowdRegex)
 console.log(crowdRegexResult)
// ------------------------------------------------------Match begining string pattern----------------------------------

 const crowds= "P1P2P3P4P5P6CCCP7P8P9"
 const crowdsRegex = /^P/
 const crowdsRegexResult = crowdsRegex.test(crowds)
 console.log(crowdsRegexResult)
 //----------------------------------Match Ending string pattern------------------------------------------------------

 const crowdsWord= "P1P2P3P4P5P6CCCP7P8P9"
 const crowdsWordRegex = /9$/
 const crowdsWordRegexResult = crowdsWordRegex.test(crowdsWord)
 console.log(crowdsWordRegexResult)

 //------------------------------Matching all numbers and Letters ------------------------------------------

 const quoteSample = "The five boxing wizard2s ju3mp  456 quickly. "
 const quoteSampleRegex = /\w/g
 const quoteSampleRegexResult = quoteSample.match(quoteSampleRegex).length
 console.log(quoteSampleRegexResult)

 //----------------------------Matching everything but not letters and numbers-------------------------------
  const quoteSamples = "The five boxing $! wizard2s ju3mp  456 quickly."
 const quoteSamplesRegex = /\W/g
 const quoteSamplesRegexResult = quoteSamples.match(quoteSamplesRegex).length
 console.log(quoteSamplesRegexResult)

 //-------------------------Matching all numbers ---------------------------------------------------------

  const quoteSampless = "The five boxing $! wizard2s ju3mp  456 quickly."
 const quoteSamplessRegex = /\d/g
 const quoteSamplessRegexResult = quoteSampless.match(quoteSamplessRegex).length
 console.log(quoteSamplessRegexResult)

 //------------------------Matching all non-numbers------------------------------
  const numberSamples = "The five boxing $! wizard2s ju3mp  456 quickly."
 const numberSamplesRegex = /\D/g
 const numberSamplesRegexResult = numberSamples.match(numberSamplesRegex).length
 console.log(numberSamplesRegexResult)

 //-------------------------Restrict Possible usernames---------------------------------
    /**
     1. If there are numbers , they must be at the end.
    2. Letters can be lower case and upper case.
    3. At least two characters long. Two-letter names can't have numbers.
     */

    let username= "JackyUmurerwa"
    let usernamesRegex = /^[A-Za-z]{2,}\d*$/
    let usernamesRegexResult = usernamesRegex.test(username)
    console.log(usernamesRegexResult)
//------------ Matching White spaces --------------------------

let sample= "Jacky Umurer wa "
    let sampleRegex = /\s/g
    let sampleRegexResult = sample.match(sampleRegex)
    console.log(sampleRegexResult)
//------------ Matching all non-White spaces characters --------------------------

let samples= "Jacky Umurer wa "
    let samplesRegex = /\S/g
    let samplesRegexResult = samples.match(samplesRegex)
    console.log(samplesRegexResult)
// -------------------------- Specify  Upper and Lower Number of matches---------

let ohStr = "Ohhh no"
let ohStrRegex = /Oh{3,6} no/
let ohStrResult = ohStrRegex.test(ohStr)
console.log(ohStrResult)

//------------------------Specify exact number of matches--------------------------------------------

let timStr = "Timmmmber"
let timRegex = /Tim{4}ber/
let timRegexResult = timRegex.test(timStr)
console.log(timRegexResult)