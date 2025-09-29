// Foro in loop with arrays
const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index  in digits) {
console.log(index);
}
// For in loop with object
const person ={
    name: "aline",
    address:"kigali",
    age:21
}
for (const key in person){
    const value = person[key]
    console.log([key,value])
}

// For in loop
Array.prototype.decimalfy =function() {
for (let i = 0; i <this.length; i++) {
this[i] =this[i].toFixed(2);
  }
};

const digitss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digitss) {
console.log(digitss[index]);
}
