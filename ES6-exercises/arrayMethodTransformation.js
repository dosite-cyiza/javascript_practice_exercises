/**
 JavaScript Array Methods Implementation
In this question, we would like you to demonstrate your understanding of array methods in JavaScript by implementing the following four methods from scratch: myMap, myFilter, myReduce, and myForEach.

Instructions:

You are not allowed to use the built-in map, filter, reduce, or forEach methods in your implementation.
Your implementations should work with arrays of any type.

Each method should take a callback function as its argument and execute that callback function for each element in the array (except for myReduce, which can take an optional second argument as the initial accumulator value).

The methods should return a new array (except for myForEach, which should return undefined).

Array Methods to Implement:

myMap(callbackFn): Creates a new array with the results of calling the provided function on every element in the calling array.
myFilter(callbackFn): Creates a new array with all elements that pass the test implemented by the provided function.

myReduce(callbackFn, initialValue?): Applies the callback function against an accumulator and each element in the array to reduce it to a single value. Optionally, an initialValue can be provided as the initial value of the accumulator.

myForEach(callbackFn): Executes a provided function once for each array element.


Hints:
For myMap, you'll need to create a new array, loop through each element, apply the callback function 
to each element, and push the result into the new array.

For myFilter, you'll need to create a new array, loop through each element, apply the callback function 
to test if the element passes the condition, and push the element into the new array if it passes the test.

For myReduce, you'll need to loop through each element, apply the callback function with the accumulator, and update the accumulator accordingly.

For myForEach, you'll need to loop through each element and execute the callback function for each element.



 */

// ----------------------myMap Function--------------

const myMap = (arr,callback) =>{
    const myData = []
    let i
    for (i = 0; i < arr.length; i++){
        const result = callback(arr[i],i,arr)
        myData.push(result)
    }
    console.log(`myMap array`)
     return myData 
}
console.log(myMap([1,2,3,4,5],(ele,index) =>{
    return ele*2
}))

// -----------------------myMap Method--------------------------
console.log("myMap Method")
Array.prototype.myMap = function(callback){
    let myData = []
    for(let i= 0; i < this.length; i++){
       myData.push(callback(this[i], i, this))


    }
    return myData

}

    const oldData = [1,2,3,4,5,7]
    let result = oldData.myMap((num) => {
       return  num * 2 ;
    })
    console.log(result)

//------------------------ myFilter Function ---------------------------
const myFilter = (arr,callback) =>{
    const myFilteredData = []
    let i
    for( i = 0; i < arr.length; i++){
        const result = callback(arr[i], i, arr)
        if(result == true){
         myFilteredData.push(arr[i])
    }
}
    console.log('myFilter array')
    return myFilteredData
}
console.log(myFilter([1,2,3,3,4,5],(ele,index,arr) =>{
    return arr.indexOf(ele) === arr.lastIndexOf(ele)
}))

// --------------------------------myFilter Method----------------------------
console.log("myFilter method")

Array.prototype.myFilter = function (callback){
    let myData = []
    for(let i=0; i < this.length; i++){
        if(callback(this[i],i,this)){
        myData.push(this[i])
        }
    }
    return myData
}
 let myNumber = [1,2,3,4,5,6,7]
 let resultFilter = myNumber.myFilter((num) =>{
    return num % 2 == 0
 } )
 console.log(resultFilter)

//---------------------------------myForEach Method------------------------------

console.log("MyForEach Method")

Array.prototype.myForEach = function(callback) {
    let result = []
    for(let i=0 ; i < this.length; i++){
        callback(this[i], i, this)
        result.push(this[i])
 
    }
    return result
}
let numbers = [1,2,3,4,5,6,7]
console.log(numbers.myForEach(ele => ele))



  
 
