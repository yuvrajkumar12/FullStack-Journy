// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

// Adding a method to the prototype
Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

// Creating an instance of Person
let person1 = new Person("John Doe", 30);

// Calling the talk method
person1.talk(); // Outputs: Hi, my name is John Doe
