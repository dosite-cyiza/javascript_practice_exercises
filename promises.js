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

// Using setTimeout  to delay the response.'


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

// Using callback fucntion to deal with asynchronous operations. 

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


// Consume then Method

console.log("-----------------------------------consuming then() method to handle async operation")

const getUsers3 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
           resolve( [
                {name:"joe", email:"joe@gmail.com"},
                {name:"doe", email:"doe@gmail.com"}

            ])
        },1000)
    })
}

const onFullfilled =(users) =>{
    console.log(users)
}

const promise = getUsers3("doe")
promise.then(onFullfilled)