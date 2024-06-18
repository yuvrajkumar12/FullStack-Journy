class person{
    constructor(name,age){
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi, my name ${this.name}`);
    }
}
class Student extends person{
    constructor(name,age,marks){
        console.log("Student class constructor");
        super(name,age);////parent class constructor is being called
        this.marks=marks;
    }
}
class Teacher extends person{
    constructor(name,age,sub){
        super(name,age);//parent class constructor is being called
        this.sub=sub;
    }
}

// Testing the classes
let student1 = new Student("Alice", 20, 85);
student1.talk(); // Outputs: Hi, my name is Alice
console.log(student1.marks); // Outputs: 85

let teacher1 = new Teacher("Mr. Smith", 40, "Math");
teacher1.talk(); // Outputs: Hi, my name is Mr. Smith
console.log(teacher1.sub); // Outputs: Math