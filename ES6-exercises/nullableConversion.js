/**
 Nullable conversion
you are given an object with properties that may contain null or undefined values.
 Your task is to implement a function called convertNullableValues that checks if any of
  the properties in the object contains null or undefined. If a property is null convert it 
  to zero and if a property is undefined convert it to an empty string. Return the modified object.

 */

  const convertNullableValues = () =>{
                let objValues = {
                    name:"kellia",
                    age: null,
                    address:''
                }
                for(let value in objValues){
                    // console.log(value)
                    if(value == null){
                        console.log(value = 0)
                    }
                    else if(value == undefined){
                        console.log(value = ' ')
                    }
                    // return objValues
                }
  }
  console.log(convertNullableValues())