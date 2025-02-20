/*One situation is when assigning the values of an array to variables*/

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"]
const [total, subtotal, tax, ...items] = order
console.log(total, subtotal, tax,items);


