//Para usarmos o método "sort", precisamos lembrar que ao aplicar o método ele retornara uma lista ordenada instavel, ou seja a lista que retornará como um array de strings, dessa forma quando falamos de números a lista não virá da forma que queremos. Exemplo  [1,9,10,4,6], a lista que se espera é [1,4,6,9,10] porém a lista retornada será [1,10,4,6,9], pois em string o zero não conta. Para resolvermos isso usamos uma funçao para que alista siga os padrões desejados. 

//Esse método tambem leva em consideração letras maisculas e minúsculas´, nesse caso a ordem é A-Z e depois a-z.

const btnOrdenarPorPrecos = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPrecos.addEventListener('click', ordenarLivrosPorPrecos)

function ordenarLivrosPorPrecos()
{
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}

//aqui está um exemplo de como usar o sort.
