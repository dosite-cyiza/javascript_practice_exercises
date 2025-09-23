/**
 Remove Duplicate
How would you remove duplicate members from an array without Set?

 */

const removeDuplicates = () =>{
    const numbers =[1,2,3,3,4,4,5,6]
    // console.log(new Set ([...numbers]))
    return numbers.filter((num,index) => numbers.indexOf(num) == index)
}
console.log(removeDuplicates())