/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
 */



function correctPolishLetters (string) {
    // your code
    let result =''
    const letters ={ 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 
      'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' 
    }
  for(let i = 0;i < string.length; i++){
    if( letters[string[i]] ){
       result += letters[string[i]]
    }
    else{
      result += string[i]
    }
  }  
  return result  
    
    
  }
  console.log(correctPolishLetters ('clu,lzcgóidsnkbz ersnjahwtoeaymzfp'))
  