document.addEventListener('DOMContentLoaded', () => {
    
    const usuario = localStorage.getItem('AcessoUsuario')

    if (usuario) {
       
        const nome = document.querySelector('h1.nome')
        nome.textContent = `Seja bem-vindo, ${usuario}!`
    }

})