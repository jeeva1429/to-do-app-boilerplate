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
    var EditOption = document.createElement('a')
    EditOption.textContent = 'x | Edit'
    todotask.append(EditOption)
    callback(EditOption,todotask)
}

// This function helps us to edit the entered task
const editButton = (EditOption,todotask) => {
    EditOption.onclick = () => {
        var newTask = prompt('Enter your new task')
        newTask === '' ? todotask.textContent:todotask.textContent = newTask
        todotask.append(EditOption)
    }
}


// When clicking the add button, the call back functions are called.
addButton.onclick = () => {
    createList((todoItem) =>{
          addTheItem(todoItem, editButton)
    })
}



