class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi,my name is ${this.name}`);
    }
}
let p1=new person("yuvraj",45);
let p2=new person("princr",25);
console.log(p1.name,p2.age);