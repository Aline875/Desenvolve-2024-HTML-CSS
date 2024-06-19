const elementoParaInserirLivros = document.getElementById('livros')
const elementoValorLivros = document.getElementById('valor_total_livros_disponiveis')
function exibirLivrosNaTela(listaDeLivros)
{
  elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro=>{
      //let disponibilidade = verififcarDisponibilidadeDoLivro(livro)
      //operador ternario.
      let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoValorLivros.innerHTML =''
        elementoParaInserirLivros.innerHTML+=`<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(1)}0</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`
    })
}


//No exemplo aacima usamos o operador ternario, no caso escrevemos o mesmo código que foi usado no exemplo abaixo de forma mais suscinta, dessa forma escrevemos em apenas uma linha oque foi escrito em 4 ou 5 linhas.

//Como vimos no exemplo acima usamos "let disponibilidade = livros.quantidade > 0 ? 'livros_iamgens' : 'livro_imagens indisponivel'. Que diz temos uma varável de disponibilidade e atribuimos a ela o balor da quantidade de livros, e na mesma linha adicionamos um parametro que pergunta, essa quantidade de livros é menor que zero '?' (if indicado pela interrogação) caso seja verdadeiro retorne a classe "livros_imagens" ':' (else indicado pelos dois pontos) caso não, retorne a classe "livros_imagens indiponivel". 

//Verificando se o livros estão disponives para compra
// function verififcarDisponibilidadeDoLivro(livro)
// {
//   if (livro.quantidade > 0 ){
//     return 'livro_imagens'
//   }
//   else{
//     return 'livro_imagens indisponivel'
//   }
// }


