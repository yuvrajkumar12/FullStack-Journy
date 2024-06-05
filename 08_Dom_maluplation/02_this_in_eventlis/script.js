let h1=document.querySelector("h1");
let p=document.querySelector("p");
let p1=document.querySelector("p1");
let btn=document.querySelector("button");
function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btn.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
p1.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
//
// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });
// ///
// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });

