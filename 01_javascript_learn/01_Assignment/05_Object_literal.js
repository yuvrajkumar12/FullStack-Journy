/**Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6] */
let random=Math.floor(Math.random()*6)+1;
console.log(random);
/**Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name */
const car={
    Name:"bmw",
    Model:123,
    Color:"Red"
};
console.log(car.Name);
/**Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States */
const person={
    Name:"Yuvraj kuamr",
    Age:19,
    City:"London"
};
person.City="New York";
console.log(person);
person.Country="India";
console.log(person);
