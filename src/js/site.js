function addTodo() {
    var todoTask = document.getElementById("todo").value;

    if (todoTask === "") {
        return;
    }

    document.getElementById("todo").value = "";

    var todoList = document.getElementById("todolist");

    var li = document.createElement('li');
    li.id = todoList.childElementCount + 1;

    var label = document.createElement('label')
    label.innerHTML = todoTask;
    label.classList.add("todoLabel");

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = addTodo;
    editButton.classList.add("editButton");

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = deleteTodo;
    deleteButton.classList.add("deleteButton");

    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}

function editTodo(args) {
    // var todoList = document.getElementById("todolist");

    // if (todoList.childElementCount === 0) {
    //     return;
    // }

    // var liItem = args.target.parentElement;

    // //var liItem = document.createElement('li');
    // //liItem.id = todoList.childElementCount + 1;
    // liItem.appendChild(document.createTextNode("chnage"));

    // var editButton = document.createElement("button");
    // editButton.innerHTML = "Save";
    // editButton.onclick = saveEdit;
    // editButton.classList.add("saveButton");

    // var deleteButton = document.createElement("button");
    // deleteButton.innerHTML = "Cancel";
    // deleteButton.onclick = cancelEdit;
    // deleteButton.classList.add("cancelButton");

}

function deleteTodo(args) {
    var todoList = document.getElementById("todolist");

    if (todoList.childElementCount === 0) {
        return;
    }
    let liItem = args.target.parentElement;
    todoList.removeChild(liItem);
}

// function saveEdit(args) {
//     var todoList = document.getElementById("todolist");

//     if (todoList.childElementCount === 0) {
//         return;
//     }
//     let liItem = args.target.parentElement;
//     todoList.removeChild(liItem);
// }

// function cancelEdit(args) {
//     var todoList = document.getElementById("todolist");

//     if (todoList.childElementCount === 0) {
//         return;
//     }
//     let liItem = args.target.parentElement;
//     todoList.removeChild(liItem);
// }