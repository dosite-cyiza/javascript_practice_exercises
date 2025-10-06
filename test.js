// //  My map method

// Array.prototype.myMap = function (callback){
//     let myData = []

//     for(let i = 0 ; i < this.length; i++){
//          myData.push(callback(this[i],i))
//          console.log(myData)
//     }

//     return myData

// }
// let oldData = [1,2,3,4,5]
// let result = oldData.myMap((ele) =>{
//     return ele *2
// })
// console.log(result)

// My filter method

Array.prototype.myFilter = function(callback){

    let myFilterArray = []
    for(let i = 0; i< this.length; i++){
        if(callback(this[i],i,this)){
            myFilterArray.push(this[i])
        }
        
    }
    return myFilterArray
}

let datas = [2,4,6,8,9]
const filterResult = datas.myFilter((ele)=>{
    return ele % 2 == 0
})
console.log(filterResult)

// my forEach method

Array.prototype.myForEach = function (callback){
  
    for(let i = 0; i < this.length; i++){
        callback(this[i],i,this)
          }
   
}

const numbers = [1,2,3,4,5]
console.log(numbers.myForEach((ele) => console.log(ele)))

// Array statistics 

const arrayStats = (arr)=>{
    let sum = arr.reduce((acc,curr)=> acc + curr,0)
    let average = arr.reduce((acc,curr) => acc + curr,0) /arr.length
    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr)

    return{
        sum,
        average:average.toFixed(2),
        minimum,
        maximum
    }

}
console.log(arrayStats([1,2,3,4,5]))

// myReduce method 

Array.prototype.myReduce = function (callback,initialValue){
       let resultReduce = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for(let i = startIndex; i < this.length ; i++){
        resultReduce =callback(resultReduce,this[i])
       
    }
    return resultReduce

}
let myArray = [1,2,3,4,5]
let reduceResult = myArray.myReduce((acc,curr) => acc + curr,0)
console.log(reduceResult)

let myArray2 = [1,2,3,4,5]
let reduceResult2 = myArray2.myReduce((acc,curr) => acc * curr,0)
console.log(reduceResult2)




