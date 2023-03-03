// Seleção dos elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")
// Funções
const saveTodo = (text) =>{
    const todo =  document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text 
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = ' <i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = ' <i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)
 
    const deletBtn = document.createElement("button")
    deletBtn.classList.add("remove-todo")
    deletBtn.innerHTML = ' <i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deletBtn)

    todoList.appendChild(todo)

    todoInput.value = "" // Deletar tarefa escrita assim que o usuario der enter.

    todoInput.focus() // Focar em adcionar outra tarefa.
}
// Eventos
todoForm.addEventListener("submit", (e ) =>{
    e.preventDefault()

    const inputValue =  todoInput.value
 
    if(inputValue){
       saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div") // Pegando a div mais proxima.

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")
    }
})