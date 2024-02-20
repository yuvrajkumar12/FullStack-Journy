let ToDo=[];//empty Array
let req=prompt("Pless Enter your Request ");
while(true){
    if(req=="quit"){
        console.log("quitting App");
        break;
    }
    if(req=="list"){
        console.log("......................");
        for(let i=0;i<ToDo.length;i++){
            console.log(i,ToDo[i]);
        }
        console.log(".......................");
    }else if(req=="add")
    {
        let add=prompt("Pless Enter the task you want to add ");
        ToDo.push(add);
        console.log("Task to add");
    }else if(req=="Delete"){
        let ind=prompt("pless Enter the task index");
        ToDo.splice(ind,1);
        console.log("Task Delete");
    }
    else{
        console.log("Wrong Request");
    }
    req=prompt("Pless enter your  Request");
}