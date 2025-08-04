/**
 Sort products
You are given an array of product objects, each containing a 
name (string) and a price (number). Your task is to implement a 
function called sortProducts that sorts the products based on their prices in ascending order. 

 */
const sortProducts = () => {
  let products =  [
  { name: "Laptop", price: 999.99 },
  { name: "Mouse", price: 25.50 },
  { name: "Keyboard", price: 75.00 },
  { name: "Monitor", price: 299.99 },
  { name: "Headphones", price: 149.99 }
]
  return products.sort((a, b) => a.price - b.price)
}
console.log(sortProducts())
