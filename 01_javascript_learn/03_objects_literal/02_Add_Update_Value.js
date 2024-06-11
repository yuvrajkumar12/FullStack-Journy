const post={
    User_Name: "Yuvraj kuamr",
    Content: "This is my first Post",
    Like:150,
    Tag:["@yuvrajku12","@yuvrajkumar"]
};
console.log(post);
//change User_anme to Aman kumar sharma
post.User_Name="Aman Kumar Sharma";
console.log(post);
//Chag the like  150 to 300
post.Like=300;
console.log(post);
//Change tag to @yuvrajkumar12 to @Singh
post.Tag="@Singh";
console.log(post);
//change like{30,41,25,}
post.Like=[30,40,50];
console.log(post);
//Delete content
delete post.Content;
console.log(post);
