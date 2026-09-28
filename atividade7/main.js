function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = Number(document.getElementById('idade').value);
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagem = document.getElementById('mensagem');

    // Aplica as regras de validação
    // Regra 1: Nome não pode estar vazio
    if (nome === '') {
        mensagem.style.color = 'red';
        mensagem.innerText = 'Por favor, preencha o nome!';
        return;
    }
    // Regra 2: E-mail não pode estar vazio
    if (email === '') {
        mensagem.style.color = 'red';
        mensagem.innerText = 'Por favor, preencha o e-mail!';
        return;
    }
    // Regra 3: Idade deve ser maior ou igual a 18
    if (idade < 18) {
        mensagem.style.color = 'red';
        mensagem.innerText = 'A idade deve ser maior ou igual a 18 anos!';
        return;
    }
    // Regra 4: Senha deve possuir pelo menos 6 caracteres
    if (senha.length < 6) {
        mensagem.style.color = 'red';
        mensagem.innerText = 'A senha deve ter pelo menos 6 caracteres!';
        return;
    }
    // Regra 5: Senha e confirmação devem ser iguais
    if (senha !== confirmarSenha) {
        mensagem.style.color = 'red';
        mensagem.innerText = 'As senhas não coincidem!';
        return;
    }

    // Se passou por todas as validações com sucesso:
    mensagem.style.color = 'green';
    mensagem.innerText = 'Cadastro realizado com sucesso!';
}