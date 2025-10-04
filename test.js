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
    if(ele % 2 == 0){
        return ele
    }
})