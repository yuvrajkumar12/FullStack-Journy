//Destructing->Stroiing value of array into Multiple variables.
let name=["tony","bruce","steve","peter"];
let[winner,runnerup,...args]=name;
console.log(winner,runnerup,args);//tony bruce [ 'steve', 'peter' ]

//Destructing object
const student={
    name:"yuvraj kumar",
    age: 20,
    class: 9,
    subject:["hindi","MAth","English","Science"],
    userName:"@yuvraj",
    password:"abc",
};
let {userName,subject}=student;
console.log(userName,subject);