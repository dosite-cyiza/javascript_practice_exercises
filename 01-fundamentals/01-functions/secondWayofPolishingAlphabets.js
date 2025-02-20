function correctPolishLetters (string) {
    const letters ={ 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 
        'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' 
      }
    return string
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
  }
 console.log(correctPolishLetters ('clu,lzcgóidsnkbz ersnjahwtoeaymzfp')) 