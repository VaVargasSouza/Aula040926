const tarefa = document.getElementById('tarefaInput');
const Adicionar = document.getElementById('adicionarTarefa');
const lista = document.getElementById('listaTarefas');

Adicionar.addEventListener('click', function() {
    const tarefaValor = tarefa.value.trim();

    if (tarefaValor) {
        // 1. Cria o item <li> da lista
        const novItem = document.createElement('li');

        // 2. Guarda o texto dentro do <span>
        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarefaValor;

        // 3. Cria o botão Concluir
        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = 'Concluir';
        btnConcluir.addEventListener('click', function() {
            if (spanTexto.style.textDecoration === 'line-through') {
                spanTexto.style.textDecoration = 'none';
            } else {
                spanTexto.style.textDecoration = 'line-through';
            }
        }); 

        // 4. Cria o botão Excluir
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', function() {
            novItem.remove(); // Apaga a <li> específica do DOM
        });

        // 5. Junta o texto e os botões dentro do novItem (<li>)
        novItem.appendChild(spanTexto);
        novItem.appendChild(btnConcluir);
        novItem.appendChild(btnExcluir);

        // 6. Adiciona o novItem (<li>) na lista (<ul>)
        lista.appendChild(novItem);

        // 7. Limpa o campo de texto
        tarefa.value = '';
    }
});