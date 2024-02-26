// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating instances
  const john = new Person('John', 30);
  const alice = new Person('Alice', 25);
  
  // Using the method
  john.sayHello(); // Output: Hello, my name is John and I am 30 years old.
  alice.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
  
  /* in this example,We define a constructor function Person.
We add a method sayHello to the Person.prototype.
Instances created with new Person() inherit the sayHello method from Person.prototype. */
