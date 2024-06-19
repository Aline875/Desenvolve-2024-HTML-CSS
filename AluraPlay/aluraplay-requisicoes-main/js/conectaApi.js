async function listaVideos()
{
    const conexao = await fetch("http://localhost:3000/videos")
    console.log(conexao)
}

listaVideos()

//Requisições
//GET: Quando falamos sobre a requisição GET, estamos apenas pedindo para que a api busque algo, normalmente em outras requisições nós precisamos especificar qual queremos usar, porem quando não especificamos o interpretador le como GET. Então caso não especifique qual requisição deseja usar, o GET sempre será usado.


