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

// Using callback function to deal with asynchronous operations. 

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
console.log("-----------------------------------consuming then() method to handle async operation")

    console.log(users)
}

const promise = getUsers3("doe")
promise.then(onFullfilled)

// --------------  Consume the Then() method by using consise way(Arrow function)



const getUsers4 =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve([
                {name:"jane", email:"jane@gmail.com"},
                {name:"john", email:"john@gmail.com"}
            ])
        },1000)
    })

}

let promise2 = getUsers4()

promise2.then((users) =>{
console.log("----------------------consume Then() method by using consise way(arrow function)")

    console.log(users)
}
)

// Promises by using then() method with it's onFullfilled and onRejected parameters.

// console.log("---------------------------------------Promises by using then() method with it's onFullfilled and onRejected parameters.")

let success = true;

function getUsers5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to fetch the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
console.log("---------------------------------------Promises by using then() method with it's onFullfilled and onRejected parameters.")
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise3 = getUsers5();
promise3.then(onFulfilled, onRejected)

// The catch method()

let success2 = false

const getUsers6 =()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(success2){
                resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
                ]);
            }
            else{
                reject("Failed to fetch the list of user")
            }
        },1000)
    })
    
}
    const promise4 = getUsers6()
promise4.catch((error) =>{
console.log("-------------------------------------catch() method")

    console.log(error)
})
