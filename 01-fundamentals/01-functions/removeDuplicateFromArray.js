/* 
Remove the duplicate from array without using Set constructor

*/

const removeDuplicate = (arr) =>{
    // return arr.filter((element,index) => arr.indexOf(element) === index)
    return [...new Set(arr)]
}
console.log(removeDuplicate([1,1,2,3,4,5]))