/*

Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartão pokémon

Precisamos crias duas variáveis no JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons.

- remover a classe aberto só do cartão que etá aberto.
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar.
- remover a classe ativo que marca o pokémon selecionado.
- adicionar a classe ativo no item da lista selecionado.

*/

// Criar 2 variáveis para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})