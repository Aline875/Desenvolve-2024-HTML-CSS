//const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront')
const btnfiltros = document.querySelectorAll('.btn')

btnfiltros.forEach(btn => btn.addEventListener('click', filtrarLivros))

//btnFiltrarLivrosFront.addEventListener('click', filtrarLivros)

function filtrarLivros()
{
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel')
    {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorDosLivros(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorDosLivros(valorTotal)
{
    elementoValorLivros.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}

//No código acima temos um filtro que pega todos os livros de front-end, mas na nossa situação atual temos um filtro espefcifico para cada botão "front-end", "back-end" e etc. Para que  possamos atribuir este filtro em cada um desses botões usamos o "querySelectorAll" que procura tudo que tem a mesma classe. Como no exemplo acima que estamos procurando todos os "btn".

// Para resolver o problema dos botões, que ao clicar vão semopre mostrar o filtro de front-end, usamos o "getElementById" para pegar o id do botão e usar o valor que tem dentro desses botões. Veja no exemplo acima.

//Para que os livros filtrados sejam mostrado na tela precisamos apena modificar o "forEach" no  outro arquivo, nesse caso adicionamos apenas uma string vazia, logo antes da função para exibir todos os livros.
