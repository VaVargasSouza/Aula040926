let quantidade = 0;
let total = 0;

function adicionar() {
    // usuario digita o nome e o preço do produto
    const nome = document.getElementById('nomeInput').value;
    const preco = Number(document.getElementById('precoInput').value);

    // Valida se os campos não estão vazios
    if (!nome || !preco) {
        alert('Por favor, preencha o nome e o preço!');
        return;
    }

    //Cria o item no carrinho com o botão "Remover"
    const carrinho = document.getElementById('carrinho');
    const li = document.createElement('li');

    li.innerHTML = `${nome} - R$ ${preco.toFixed(2)} <button onclick="remover(this, ${preco})">Remover</button>`;
    carrinho.appendChild(li);

    // Atualiza a quantidade e o total
    quantidade++;
    total += preco;
    atualizarTela();

    //Limpa os campos para a próxima digitação
    document.getElementById('nomeInput').value = '';
    document.getElementById('precoInput').value = '';
}

function remover(botao, preco) {
    // Remove o item da lista
    botao.parentElement.remove();

    // Recalcula os totais
    quantidade--;
    total -= preco;
    atualizarTela();
}

function atualizarTela() {
    document.getElementById('qtd').innerText = quantidade;
    document.getElementById('total').innerText = total.toFixed(2);
}