//using fetch--To fetch and parse JSON data from a server using the Fetch API in JavaScript
let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fetch);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log(data2);
})
.catch((err)=>{
    console.log("Error-",err);
});