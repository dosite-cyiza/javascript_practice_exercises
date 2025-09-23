/*Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

function getSize(width, height, depth){
    let surfaceArea = 2 * (width*height + width*depth + height*depth)
    let volume = width * height * depth
    const result = []
    
    return [surfaceArea,volume]
    
  }
  console.log(getSize(3, 4, 5))