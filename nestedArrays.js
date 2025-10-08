const myArrays = (array) =>{
    let result = []
    const uniqueElements = array.filter((ele,index) => array.indexOf(ele) == index)
    for(let ele of uniqueElements){
       let count = 0
       for (let item of array){
        if (item == ele){
            count++
        }
       }
       result.push([ele,count])
    }
    return result

}
console.log(myArrays([1,2,3,4,2,3,4,5]))
// output [[1,1],[2,2],[3,2],[4,2],[5,1]]