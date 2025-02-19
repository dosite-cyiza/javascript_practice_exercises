/*Create a function called capitalizeVowels that takes a string and returns the string with all the vowels at odd indexes capitalized
capitalizeVowels("hello world") // "hEllO wOrld"

capitalizeVowels("javascript is an awesome language") // "jAvAsCrIpt Is An AwEsOmE lAnguAgE"

capitalizeVowels("programming can be fun and exciting") // "prOgrAmmIng cAn bE fUn And ExcItIng"

capitalizeVowels("quick brown fox jumps over the lazy dog") // "quIck brOwn fOx jUmps OvEr thE lAzY dOg"

capitalizeVowels("test with no changes") // "tEst wIth nO chAngEs"
*/

capitalizeVowels = (str) => {
    const vowels ={a:'A', i:'I',u:'U',e:'E',o:'O'}
    let result = ''
for(let i = 0; i< str.length;i++){
    if (i % 2 !== 0 && vowels[str[i]]) {
         result += vowels[str[i]]
        }
        else{
            result += str[i]
        }
    
    }
    return result
    }
console.log(capitalizeVowels('hello world'))
console.log(capitalizeVowels("javascript is an awesomelanguage"))
console.log(capitalizeVowels("quick brown fox jumps over the lazy dog"))
console.log(capitalizeVowels("test with no changes"))
