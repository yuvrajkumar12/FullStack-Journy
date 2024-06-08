const inputtask= document.getElementById("task");
const takpriority=document.getElementById("priority");
const timetak=document.getElementById("deadline");
const addtsk=document.getElementById("add-task");
const addlist=document.getElementById("task-list");

addtsk.addEventListener("click",() => {
    const task=inputtask.value;
    const priority=takpriority.value;
    const deadline=timetak.value;
    if(task.trim()===""||deadline===""){
        alert("pless select upcomming date ");
        return;//do not add the task

    }
    const selectdata=new Date(deadline);
    const currentData=new Date();
    if(selectdata<=currentData){
        alert("pless select op comming date");
        return;
    }
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <p>${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Mark Done</button>`;
 
    addlist.appendChild(taskItem);
    inputtask.value = "";
    takpriority.value = "top";
    timetak.value = "";
    
});
addlist.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});