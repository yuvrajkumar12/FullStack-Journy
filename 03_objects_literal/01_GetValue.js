const post={
    User_Name: "Yuvraj kuamr",
    Content: "This is my first Post",
    Like:150,
    Tag:["@yuvrajku12","@yuvrajkumar"]
};
console.log(post);
console.log(post["User_Name"]);//Access the value
//Using dot Operator
console.log(post.Content);
//using variable
let prop="Like";
console.log(post[prop]);
