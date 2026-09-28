function mudarCor(nomeCor,codigoHex){
    //seleciona o quadrado e o texto pelos seu IDS
    const quadrado = document.getElementById('quadrado');
    const textoCor = document.getElementById('texto-cor');

    //Altera a cor de fundo do quadrado
    quadrado.style.backgroundColor = codigoHex;

    //Atualiza o texto dinamicamente
    textoCor.innerText = `Cor atual: ${nomeCor}`;
}