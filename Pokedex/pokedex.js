//Protótipo 2.0 de código para uma pokedex para o jogo pokemon TCG Pockect
let cartaEscolhida;

const listaPokemon = [
    { nome: 'Bulbasaur', tipo: 'grama', nIdentificao: '001', habilidades: 'Vine Whipe', colecao: 'Dominação Genética' },
    { nome: 'Ivysaur', tipo: 'grama', nIdentificao: '002', habilidades: 'Razor Leaf', colecao: 'Dominação Genética' },
    { nome: 'Venusaur', tipo: 'grama', nIdentificao: '003', habilidades: 'Mega Drain', colecao: 'Dominação Genética' },
    { nome: 'Venusaur EX', tipo: 'grama', nIdentificao: '004', habilidades: 'Razor Lead and Giant Bloom', colecao: 'Dominação Genética' },
    { nome: 'Caterpie', tipo: 'grama', nIdentificao: '005', habilidades: 'Find a Friend', colecao: 'Dominação Genética' },
    { nome: 'Metapod', tipo: 'grama', nIdentificao: '006', habilidades: 'Bug Bite', colecao: 'Dominação Genética' },
    { nome: 'Butterfree', tipo: 'grama', nIdentificao: '007', habilidades: 'Powder Heal and Gust', colecao: 'Dominação Genética' },
    { nome: 'Weedle', tipo: 'grama', nIdentificao: '008', habilidades: 'Sting', colecao: 'Dominação Genética' },
    { nome: 'Kakuna', tipo: 'grama', nIdentificao: '009', habilidades: 'Bug Bite', colecao: 'Dominação Genética' },
    { nome: 'Beedrill', tipo: 'grama', nIdentificao: '010', habilidades: 'Sharp Sting', colecao: 'Dominação Genética' },
    { nome: 'Oddish', tipo: 'grama', nIdentificao: '011', habilidades: 'Ram', colecao: 'Dominação Genética' },
    { nome: 'Gloom', tipo: 'grama', nIdentificao: '012', habilidades: 'Drool', colecao: 'Dominação Genética' },
    { nome: 'Vileplume', tipo: 'grama', nIdentificao: '013', habilidades: 'Soothing Scent', colecao: 'Dominação Genética' },
    { nome: 'Paras', tipo: 'grama', nIdentificao: '014', habilidades: 'Scratch', colecao: 'Dominação Genética' },
    { nome: 'Parasect', tipo: 'grama', nIdentificao: '015', habilidades: 'Slash', colecao: 'Dominação Genética' },
    { nome: 'Venonat', tipo: 'grama', nIdentificao: '016', habilidades: 'Tackle', colecao: 'Dominação Genética' },
    { nome: 'Venomoth', tipo: 'grama', nIdentificao: '017', habilidades: 'Poison Powder', colecao: 'Dominação Genética' },
    { nome: 'Bellsprout', tipo: 'grama', nIdentificao: '018', habilidades: 'Vine Whipe', colecao: 'Dominação Genética' },
    { nome: 'Weepinbell', tipo: 'grama', nIdentificao: '019', habilidades: 'Razor Leaf', colecao: 'Dominação Genética' },
    { nome: 'Victreebel', tipo: 'grama', nIdentificao: '020', habilidades: 'Fragrance Trap and Vine Whipe', colecao: 'Dominação Genética' },
    { nome: 'Exeggcute', tipo: 'grama', nIdentificao: '021', habilidades: 'Seed Bomb', colecao: 'Dominação Genética' },
    { nome: 'Exeggutor', tipo: 'grama', nIdentificao: '022', habilidades: 'Stomp', colecao: 'Dominação Genética' },
    { nome: 'Exeggutor EX', tipo: 'grama', nIdentificao: '023', habilidades: 'Tropical Swing', colecao: 'Dominação Genética' },
    { nome: 'Tangela', tipo: 'grama', nIdentificao: '024', habilidades: 'Absorb', colecao: 'Dominação Genética' },
    { nome: 'Scyther', tipo: 'grama', nIdentificao: '025', habilidades: 'Sharp Scythe', colecao: 'Dominação Genética' },
    { nome: 'Pinsir', tipo: 'grama', nIdentificao: '026', habilidades: 'Double Horn', colecao: 'Dominação Genética' },
    { nome: 'Cottonee', tipo: 'grama', nIdentificao: '027', habilidades: 'Attach', colecao: 'Dominação Genética' },
    { nome: 'Whimsicott', tipo: 'grama', nIdentificao: '028', habilidades: 'Rolling Tackle', colecao: 'Dominação Genética' },
    { nome: 'Petilil', tipo: 'grama', nIdentificao: '029', habilidades: 'Blot', colecao: 'Dominação Genética' },
    { nome: 'Lilligant', tipo: 'grama', nIdentificao: '030', habilidades: 'Leaf Supply', colecao: 'Dominação Genética' },
    { nome: 'Skiddo', tipo: 'grama', nIdentificao: '031', habilidades: 'Surprise Attack', colecao: 'Dominação Genética' },
    { nome: 'Gogoat', tipo: 'grama', nIdentificao: '032', habilidades: 'Razor Leaf', colecao: 'Dominação Genética' }
];

function buscarCarta(codigo) {
    const posicao = parseInt(codigo, 10) - 1;

    if (posicao >= 0 && posicao < listaPokemon.length) {
        return listaPokemon[posicao];
    } else {
        return "Código inválido";
    }
}

//const resultado = buscarCarta(cartaEscolhida);
 
//console.log(`A carta ${resultado.nIdentificao} é o pokemon ${resultado.nome}, sendo do tipo ${resultado.tipo} com o(s) ataque(s) ${resultado.habilidades} e pertencendo a coleção ${resultado.colecao}`);

const inp = prompt("Qual o número da carta?")
cartaEscolhida = inp;
const resultado = buscarCarta(cartaEscolhida);
const NCarta = document.getElementById("NCarta");
NCarta.innerHTML = (`A carta ${resultado.nIdentificao} é o pokemon ${resultado.nome}, sendo do tipo ${resultado.tipo} com o(s) ataque(s) ${resultado.habilidades} e pertencendo a coleção ${resultado.colecao}`);


/*
const numero = prompt('Digite um numero: ');
const numeroTitulo = document.getElementById("NCarta");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
*/
