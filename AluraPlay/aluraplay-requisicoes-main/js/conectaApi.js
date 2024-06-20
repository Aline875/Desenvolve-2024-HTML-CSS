async function listaVideos()
{
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
    //console.log(conexaoConvertida)
}

export const conectaApi = {
    listaVideos
}

//listaVideos()

//Requisições
//GET: Quando falamos sobre a requisição GET, estamos apenas pedindo para que a api busque algo, normalmente em outras requisições nós precisamos especificar qual queremos usar, porem quando não especificamos o interpretador le como GET. Então caso não especifique qual requisição deseja usar, o GET sempre será usado.

//No momento em meu terminal tenho que passar o comando completo para que o json-server possa rodar de forma correta. Nesse caso utilizo o comando principal, o comando para assistir mudanças e informo a porta. " json-server --watch db.json --port 3000 ". Este é o comando que estou utilizando para que o json server rode naminha maquina.

//Lembre-se que as vezes é necessário colocar mais de um await dentro de uma async function, como no exemplo acima o await deve ser escrito antes das duas constante para que o código não retorne uma promessa pendente.


