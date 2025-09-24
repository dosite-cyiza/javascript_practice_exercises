console.log("Getting users from list")

// List of users.
const getUsers1 = () => {
    let users =[]
      return  users = [
        {name:"john", email:"john@gmail.com"},
        {name:"jane", email:"jane@gmail.com"}
    ]
}
console.log(getUsers1());

// Find user with name.
const findUser = (name) =>{
    const users = getUsers1();   
    const user = users.find(user => user.name === name);
    return user ? user : "user not found"
}
console.log(findUser("jane"));

console.log("--------------------------Getting users from list by using setTimeout method")

// Using setTimeout call back to delay the response.'


const getUsers = () => {
    let users =[]
    setTimeout(() =>{
       users = [
        {name:"john", email:"john@gmail.com"},
        {name:"jane", email:"jane@gmail.com"}
    ]
    },1000)
return users
}
console.log(getUsers());

const findUser2 = (name) =>{
    const users = getUsers1();   
    const user = users.find(user => user.name === name);
    return user ? user : "user not found"
}
console.log(findUser2("jane"));

console.log("--------------------------Getting users from list by using callback function")

// Using callback fucntion to get users 

const getUsers2 = (callback) =>{
    setTimeout(() => {
    callback([
      { name: 'john', email: 'john@test.com' },
      { name: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}
const findUser3 =(name, callback)=>{
    getUsers2 ((users) =>{
  const user = users.find((user) => user.name === name)
  callback(user)
  })
}
console.log(findUser3("john",console.log))