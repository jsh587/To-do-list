function addTaskAndSave() {
    const getTask = document.getElementById("input-task");
    const node = document.createTextNode(getTask.value);
    const newList = document.createElement("li");
    const newLabel = document.createElement("label");
    const newInput = document.createElement("input");
    const newSpan = document.createElement("span");
    const newLabel2 = document.createElement("label");
    const newButton = document.createElement("button");
    const uList = document.getElementById("task-list");
    uList.appendChild(newList);
    newLabel.appendChild(newInput);
    newLabel2.appendChild(newButton);
    newList.appendChild(newLabel);
    newSpan.appendChild(node);
    newList.appendChild(newSpan);
    newList.appendChild(newLabel2);
    newInput.setAttribute("type", "checkbox");
    newSpan.setAttribute("class", "task");
    newButton.setAttribute("class", "delete-btn");
    newList.setAttribute("class", "list");
    newInput.setAttribute("class", "cBox")
    console.log(getTask.value);
    getTask.value = "";
    updateTask()
    newButton.addEventListener("click",function() {
        updateTask()
        newList.remove()
    });
    newInput.addEventListener("click", function() {
        updateTask()
        if (newInput.checked) {
            newSpan.style.textDecoration = "line-through";
        } else {
            newSpan.style.textDecoration = "none";
        }
    });
}

function creatingTask(list){
    let text = list[0];
    let checked = Boolean(list[1]);
    const getTask = document.getElementById("input-task");
    const node = document.createTextNode(text);
    const newList = document.createElement("li");
    const newLabel = document.createElement("label");
    const newInput = document.createElement("input");
    newInput.checked = checked
    const newSpan = document.createElement("span");
    const newLabel2 = document.createElement("label");
    const newButton = document.createElement("button");
    const uList = document.getElementById("task-list");
    uList.appendChild(newList);
    newLabel.appendChild(newInput);
    newLabel2.appendChild(newButton);
    newList.appendChild(newLabel);
    newSpan.appendChild(node);
    newList.appendChild(newSpan);
    newList.appendChild(newLabel2);
    newInput.setAttribute("type", "checkbox");
    newSpan.setAttribute("class", "task");
    newButton.setAttribute("class", "delete-btn");
    newList.setAttribute("class", "list");
    newInput.setAttribute("class", "cBox")
    console.log(getTask.value);
    getTask.value = "";
    if (newInput.checked) {
        newSpan.style.textDecoration = "line-through";
    } else {
        newSpan.style.textDecoration = "none";
    }
    newButton.addEventListener("click",function() {
        updateTask()
        newList.remove()
    });
    newInput.addEventListener("click", function() {
        updateTask()
        if (newInput.checked) {
            newSpan.style.textDecoration = "line-through";
        } else {
            newSpan.style.textDecoration = "none";
        }
    });
}

function removeList(){
    let btndl = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < btndl.length; i++){
        btndl[i].addEventListener("click", function(){
            this.parentNode.parentElement.remove();
        });
    }
}

function checkList(){
    let cdl = document.getElementsByClassName("cBox");
    for (let i = 0; i < cdl.length; i++){
        cdl[i].addEventListener("click", function(){
            if (this.checked) {
                this.parentNode.nextElementSibling.style.textDecoration = "line-through";
            } else {
                this.parentNode.nextElementSibling.style.textDecoration = "none";
            }
        });
    }
}

function updateTask() {
    let newTaskList = [];
    let currentTaskList = document.getElementsByClassName("list");
    for (let i = 0; i < currentTaskList.length; i++) {
        let taskName = currentTaskList[i].firstElementChild.nextElementSibling.textContent;
        let isDone = currentTaskList[i].firstElementChild.firstElementChild.checked;
        newTaskList.push([taskName, isDone]);
    }
    localStorage.setItem("tasks", JSON.stringify(newTaskList))
}

function loadTask() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let i = 0; i < taskList.length; i++) {
        creatingTask(taskList[i]);
    }
}


loadTask()
updateTask()
removeList()
checkList()

document.getElementById("add-task-button").addEventListener("click", addTaskAndSave);
