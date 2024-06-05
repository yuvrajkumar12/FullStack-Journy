let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let deletn = document.createElement("button");
    deletn.innerText = "delete";
    deletn.classList.add("delete");
    item.appendChild(deletn);
    
    ul.appendChild(item);
    inp.value = "";

    // Add event listener to the new delete button
    deletn.addEventListener("click", function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
});

// Initial event listeners for existing delete buttons
let de = document.querySelectorAll(".delete");
for (let delt of de) {
    delt.addEventListener("click", function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
