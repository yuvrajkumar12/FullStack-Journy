//Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'
//Qs2. Add following attributes to the element : Change placeholder value of input to "username" Change the id of button to "btn'
//Qs3. Access the btn using the querySelector and button id. Change the button background  color to blue and text color to white.
//Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.
//Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",where Delta is bold.
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
//q2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//q3
let btn1=button.querySelector("#btn");

//q4
let h1=document.createElement("h1");
h1.innerHTML="<u>dom practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("purpl");
//q4
let p=document.createElement("p");
p.innerHTML="Apna college <b>delta</b> practics";
document.querySelector("body").append(p);


