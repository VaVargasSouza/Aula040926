function cadastrar() {
    // Passo 1: Capturar os elementos de entrada (inputs)
    const inputNome = document.getElementById('nome');
    const inputIdade = document.getElementById('idade');
    const inputNota = document.getElementById('nota');

    // Passo 2: Pegar os valores digitados
    const nome = inputNome.value
    const idade = inputIdade.value;
    const nota = Number(inputNota.value);

    // Passo 3: Validar se os campos não estão vazios
    if (!nome || !idade || inputNota.value === '') {
        alert('Por favor, preencha todos os campos!');
        return; // Interrompe a execução caso falte algum dado
    }

    // Passo 4: Calcular a situação (Aprovado >= 60)
    const situacao = nota >= 60 ? 'Aprovado' : 'Reprovado';

    // Passo 5: Criar uma nova linha <tr> no JavaScript
    const linha = document.createElement('tr');

    // Passo 6: Inserir o HTML das células <td> na linha
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${nota}</td>
        <td>${situacao}</td>
        <td><button onclick="removerLinha(this)">Excluir</button></td>
    `;

    // Passo 7: Adicionar a linha criada dentro do <tbody> da tabela
    document.getElementById('tabela').appendChild(linha);

    // Passo 8: Limpar os campos para a próxima digitação
    inputNome.value = '';
    inputIdade.value = '';
    inputNota.value = '';
}

// Função responsável por excluir a linha selecionada
function removerLinha(botao) {
    // botao (o elemento <button>) -> parentElement (o <td>) -> parentElement (o <tr> da linha)
    const linha = botao.parentElement.parentElement;
    linha.remove(); // Remove o elemento <tr> da página
}