function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    let diferença = ate - de + 1;

    console.log(diferença);

    if (quantidade <= diferença & de < ate) {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate)
            }

            sorteados.push(numero);
        }
    } else {
        alert('A quantidade de números sorteados não pode ser maior que a diferença entre os números limites, e o número inicial deve ser menor que o limite. Insira valores válidos.');
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    habiltandoBotãoReiniciar();

}
let botao = document.getElementById('btn-reiniciar');

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function habiltandoBotãoReiniciar() {
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function desabilitadoBotãoReiniciar() {
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desabilitadoBotãoReiniciar()
}