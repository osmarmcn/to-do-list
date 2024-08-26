     // O JavaScript permanece o mesmo que na versão anterior
     const form = document.getElementById('cadastroForm');
     const nome = document.getElementById('nome');
     const email = document.getElementById('email');
     const senha = document.getElementById('senha');
     const confirmarSenha = document.getElementById('confirmarSenha');
     const feedbackMessage = document.getElementById('feedbackMessage');
     const downloadLink = document.getElementById('downloadLink');

    //  login
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('emailLogin');
    const loginSenha = document.getElementById('senhaLogin');
    const btn = document.getElementById('btn-acessar')
    const emailErrorLogin = document.getElementById('emailErrorLogin');
    const senhaErrorLogin = document.getElementById('senhaErrorLogin');


     const cadastro = [
        {nome: 'Joao', email: 'joao@gmail.com', senha: 'Junzai--5'}
     ]

     form.addEventListener('submit', (e) => {
         e.preventDefault();
         if (validateForm()) {
             const userData = {
                 nome: nome.value.trim(),
                 email: email.value.trim(),
                 senha: senha.value.trim()
             };
             
             simulateUpload(userData);
             cadastro.push(userData)
             console.log(cadastro)
             feedbackMessage.textContent = 'Cadastrado com sucesso!';


            

         } else {
             showFeedback('Por favor, corrija os erros no formulário.', 'error');
             shakeForm();
         }
     });

     btn.addEventListener('click', function(e) {
        e.preventDefault();
    
        
        clearErrors();
    
        if (validateLogin()) {
            const email = loginEmail.value.trim();
            const senha = loginSenha.value.trim();
    
            const user = cadastro.find(user => user.email === email && user.senha === senha);
    
            if (user) {
                localStorage.setItem('AcessoUsuario', user.nome);
                window.location.href = 'dashboard.html';
            } else {
                showFeedback('Email ou senha incorretos!', 'error');
            }
        }
    });

     function simulateUpload(userData) {
         showFeedback('Enviando dados...', 'info');
         
         setTimeout(() => {
             if (Math.random() < 0.9) {
                 showFeedback('Cadastro realizado com sucesso!', 'success');
                 createDownloadLink(userData);
                 form.reset();
             } else {
                 showFeedback('Erro ao cadastrar. Por favor, tente novamente.', 'error');
             }
         }, 1500);
     }

     function showFeedback(message, type) {
         feedbackMessage.textContent = message;
         feedbackMessage.className = `show ${type}`;
         
         setTimeout(() => {
             feedbackMessage.className = '';
         }, 5000);
     }

     function createDownloadLink(userData) {
         const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData));
         const dlAnchorElem = document.createElement('a');
         dlAnchorElem.setAttribute("href", dataStr);
         dlAnchorElem.setAttribute("download", "cadastro_usuario.json");
         dlAnchorElem.textContent = "Clique aqui para baixar o cadastro em JSON";
         
         downloadLink.innerHTML = '';
         downloadLink.appendChild(dlAnchorElem);
         downloadLink.style.display = 'block';
     }

     function validateForm() {
         let isValid = true;

         if (!validateNome()) isValid = false;
         if (!validateEmail()) isValid = false;
         if (!validateSenha()) isValid = false;
         if (!validateConfirmarSenha()) isValid = false;
         

         return isValid;
     }

     function validateNome() {
         const nomeValue = nome.value.trim();
         if (nomeValue === '') {
             setError(nome, 'O nome é obrigatório');
             return false;
         } else if (nomeValue.length < 3) {
             setError(nome, 'O nome deve ter pelo menos 3 caracteres');
             return false;
         } else {
             setSuccess(nome);
             return true;
         }
     }

     function validateEmail() {
         const emailValue = email.value.trim();
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (emailValue === '') {
             setError(email, 'O e-mail é obrigatório');
             return false;
         } else if (!emailRegex.test(emailValue)) {
             setError(email, 'Digite um e-mail válido');
             return false;
         } else {
             setSuccess(email);
             return true;
         }
     }

     function validateSenha() {
         const senhaValue = senha.value.trim();
         if (senhaValue === '') {
             setError(senha, 'A senha é obrigatória');
             return false;
         } else if (senhaValue.length < 6) {
             setError(senha, 'A senha deve ter pelo menos 6 caracteres');
             return false;
         } else {
             setSuccess(senha);
             return true;
         }
     }

     function validateConfirmarSenha() {
         const confirmarSenhaValue = confirmarSenha.value.trim();
         const senhaValue = senha.value.trim();
         if (confirmarSenhaValue === '') {
             setError(confirmarSenha, 'A confirmação de senha é obrigatória');
             return false;
         } else if (confirmarSenhaValue !== senhaValue) {
             setError(confirmarSenha, 'As senhas não coincidem');
             return false;
         } else {
             setSuccess(confirmarSenha);
             return true;
         }
     }

     function setError(input, message) {
         const formGroup = input.parentElement;
         const errorDisplay = formGroup.querySelector('.error');
         errorDisplay.innerText = message;
         input.classList.add('error');
         input.classList.remove('success');
     }

     function setSuccess(input) {
         const formGroup = input.parentElement;
         const errorDisplay = formGroup.querySelector('.error');
         errorDisplay.innerText = '';
         input.classList.add('success');
         input.classList.remove('error');
     }

     function shakeForm() {
         form.classList.add('shake');
         setTimeout(() => {
             form.classList.remove('shake');
         }, 820);
     }


     function validateLogin() {
        let isValid = true;
    
        if (loginEmail.value.trim() === '') {
            emailErrorLogin.textContent = 'O campo de e-mail não pode estar vazio.';
            isValid = false;
        }
    
        if (loginSenha.value.trim() === '') {
            senhaErrorLogin.textContent = 'O campo de senha não pode estar vazio.';
            isValid = false;
        }
    
        if (isValid) {
            const email = loginEmail.value.trim();
            const senha = loginSenha.value.trim();
    
            const user = cadastro.find(user => user.email === email && user.senha === senha);
    
            if (!user) {
                showFeedback('Email ou senha incorretos!', 'error');
                isValid = false;
            }
        }
    
        return isValid;
    }
    
    function clearErrors() {
        emailErrorLogin.textContent = '';
        senhaErrorLogin.textContent = '';
    }
    //  function validateLogin() {
    //     let isValid = true;
    
    //     if (!validateEmailLogin()) isValid = false;
    //     if (!validateSenhaLogin()) isValid = false;
    
    //     return isValid;
    // }
    
    // function validateEmailLogin() {
    //     const email = loginEmail.value.trim();
    //     const usuario = cadastro.find(usuario => usuario.email === email);
    
    //     if (usuario) {
    //         return true;
    //     } else {
    //         setError(loginEmail, 'E-mail não encontrado.');
    //         return false;
    //     }
    // }
    
    // function validateSenhaLogin() {
    //     const senha = loginSenha.value.trim();
    //     const usuario = cadastro.find(usuario => usuario.senha === senha);
    //     if (usuario) { 
    //         return true;
    //     } else {
    //         setError(loginSenha, 'A senha é invalida');
    //         return false;
    //     }
    // }
    