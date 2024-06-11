//Accessing data from json
/**there are two method
 1.json.parse(data) -->To parse a string data into a js objet
 2.json.stringify(json)-->To parse a js object data into JSON
 parse-->ek data fromate se dusra data fromate me change krna
 */
 let jsores = '{"fact":"The cat\'s footpads absorb the shocks of the landing when the cat jumps.","length":71}';//pass the data
 let valid1 = JSON.parse(jsores);
 console.log(valid1);
 //create json
 let student={
    name:"yuvraj",
    marks:24
 };
 let s=JSON.stringify(student);//To convert the parsed JavaScript object back into a JSON string,
 console.log(s);
 

