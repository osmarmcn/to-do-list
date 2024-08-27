
// Seleção de elementos
const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const editForm = document.getElementById("edit-form")
const editInput = document.getElementById("edit-input")
const cancelEditBtn = document.getElementById("cancel-edit-btn")
const searchInput = document.getElementById("search-input")
const eraseBtn = document.getElementById("erase-button")
const filterBtn = document.getElementById("filter-select")

let oldInputValue



// adicionar o nome de forma dinamica
document.addEventListener('DOMContentLoaded', () => {
    
    const usuario = localStorage.getItem('AcessoUsuario')

    if (usuario) {
       
        const nome = document.querySelector('h1.nome')
        nome.textContent = `Seja bem-vindo, ${usuario}!`
    }

})


todoForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const valorInput = todoInput.value 

    if(valorInput){
        console.log(valorInput)

        salvar(valorInput)
    }

})

function salvar(){
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = Text
    todo.appendChild(todoTitle)
    // console.log(todo)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-btn')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-btn')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)


    todoList.appendChild(todo)

    todoInput.value = ''

}