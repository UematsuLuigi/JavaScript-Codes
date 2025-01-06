//Protótipo de código para uma pokedex para o jogo pokemon TCG Pockect

cartaEscolhida = `002`;

const pokemon1 = { 
    nome: 'Bulbasaur', 
    tipo: 'grama',
    nIdentificao: '001'
};

const pokemon2 = { 
    nome: 'Ivysaur', 
    tipo: 'grama',
    nIdentificao: '002'
};

const pokemon3 = { 
    nome: 'Venusaur', 
    tipo: 'grama',
    nIdentificao: '003'
};

const listaTeste = [pokemon1, pokemon2, pokemon3]

function buscarCarta(codigo) {
    const posicao = parseInt(codigo, 10) - 1;

    if (posicao >= 0 && posicao < listaTeste.length) {
        return listaTeste[posicao];
    } else {
        return "Código inválido";
    }
}

const resultado = buscarCarta(cartaEscolhida);

console.log(`A carta ${resultado.nIdentificao} é o pokemon ${resultado.nome}, sendo do tipo ${resultado.tipo}`);
