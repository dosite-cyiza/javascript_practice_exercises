/**
 Prototype
1. Implement a simple inheritance chain using prototypes and demonstrate 
    how properties/methods are inherited.
2. Create a constructor function and add methods to its prototype.
     Then, create instances of the constructor and observe how they share the methods.
3. Use the new keyword to create instances of a constructor function
     and initialize their properties.
5. Build a custom object using Object.create and set its prototype to a predefined object.
 Demonstrate how inheritance works in this scenario.

 */

 class Animal {
    constructor(Animname){
        this.Animname = Animname
    }
    getName(){
        return this.Animname
    }
 }

 class Dogs extends Animal{
    constructor(Animname,legs){
        super(Animname)
        this.legs = legs
    }
 }

 const animal = new Animal("dog")
 console.log(animal.Animname)
 const dog = new Dogs("Toti")
 console.log(dog.Animname)
