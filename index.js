var addButton = document.getElementById('button')
var toDoList = document.getElementById('todolist')


// This function will get the user input and stores in a variable and accepts callback function
const createList  = (callback) => {
    var todoItem = document.getElementById('input').value
    callback(todoItem)
}


// This function will add the user input and also add the edit button to the task
const addTheItem =(newTask, callback) => {
    var todotask = document.createElement('li')
    toDoList.append(todotask)
    todotask.innerHTML = newTask
    var EditedItem = document.createElement('a')
    EditedItem.textContent = 'x | Edit'
    todotask.append(EditedItem)
    callback(EditedItem,todotask)
}

// This function helps us to edit the entered task
const editButton = (EditedItem,todotask) => {
    EditedItem.onclick = () => {
        var newTask = prompt('Enter your new task')
        newTask === '' ? todotask.textContent:todotask.textContent = newTask
        todotask.append(EditedItem)
    }
}


// When clicking the add button, the call back functions are called.
addButton.onclick = () => {
    createList((todoItem) =>{
          addTheItem(todoItem, editButton)
    })
}



