const todoInput = document.querySelector('.todo-input')
const addButton = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')

addButton.addEventListener('click', addTodo)

function addTodo(event){
    event.preventDefault()
    if(todoInput.value != ""){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo-div')
    
        const todoItem = document.createElement('li')
        todoItem.innerText = todoInput.value
        todoDiv.appendChild(todoItem) 
    
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-button')
        trashButton.addEventListener('click', function(event){
            const todo = event.target.parentElement
            todo.remove()
        })
        todoDiv.appendChild(trashButton)
    
        todoList.appendChild(todoDiv)
        todoInput.value = ""
    }
}
