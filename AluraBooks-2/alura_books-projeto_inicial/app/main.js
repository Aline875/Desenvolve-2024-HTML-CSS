let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscarLivrosDaAPI()

async function getbuscarLivrosDaAPI()
{
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let LivrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(LivrosComDesconto)
}

