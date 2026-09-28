let contador = 0;

const btnAdicionar = document.getElementById('adicionar');
const btnRemover = document.getElementById('remover');
const btnZerar = document.getElementById('zerar');
const rest = document.getElementById('resultado');

btnAdicionar.addEventListener('click',()=>{
    contador++;
    rest.innerHTML = contador
});

btnRemover.addEventListener('click',()=>{
    if(contador> 0){
        contador--;
        rest.innerHTML = contador
    };
    
});

btnZerar.addEventListener('click',()=>{
    contador= 0;
    rest.innerHTML = contador
});