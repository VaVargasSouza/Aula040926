function filtrarProdutos() {

    const termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();

    const itens = document.querySelectorAll('#listaProdutos li');

    // Passo 3: Percorrer cada item da lista
    itens.forEach(function(item) {
        // Obter o texto do item em minúsculas (ex: "monitor")
        const nomeProduto = item.innerText.toLowerCase();

        // Passo 4: Verificar se o texto do item contém o termo pesquisado
        if (nomeProduto.includes(termoPesquisa)) {
            // Se corresponder, exibe o item
            item.style.display = '';
        } else {
            // Se não corresponder, esconde o item
            item.style.display = 'none';
        }
    });
}