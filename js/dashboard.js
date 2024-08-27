
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

// funções
function salvar(text){
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
    // console.log(todo)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)


    todoList.appendChild(todo)

    todoInput.value = ''
    todoInput.focus()

}


const toggleForms = () =>{
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}


// eventos
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const valorInput = todoInput.value 

    if(valorInput){
        console.log(valorInput)

        salvar(valorInput)
    }

})

document.addEventListener('click', (e) =>{
    const elemento = e.target
    const paiElemento = elemento.closest('div')

    if(elemento.classList.contains('finish-todo')){
        // console.log('clicou em finalizar')
        paiElemento.classList.toggle('done')

    }

    if(elemento.classList.contains('remove-todo')){
        paiElemento.remove()
    }

    if(elemento.classList.contains('edit-todo')){
        toggleForms()
    }



})


cancelEditBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    toggleForms()
})

