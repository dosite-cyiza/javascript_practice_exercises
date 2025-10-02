//  My map method

Array.prototype.myMap = function (callback){
    let myData = []

    for(let i = 0 ; i < this.length; i++){
         myData.push(callback(this[i],i,this))
    }

    return myData

}
let oldData = [1,2,3,4,5]
let result = oldData.myMap((ele) =>{
    return ele *2
})
console.log(result)
