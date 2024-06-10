const containerVideos = document.querySelector('.videos__container');
async function BuscareMostrarVideos(){
    try {
        

            const busca = await fetch('http://localhost:3000/videos');
            const videos = await busca.json();
            //Ao buscar os dados de uma  api fake deve-se sempre colocar o link do endpoint nesse caso "http://localhost:3000/videos"
            //O fetch é uma função assincrona então no momento a promise está pendente. O método de resolução ficara abaixo.

            videos.forEach((video)=>{
                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                        </div>
                </li>`;
            })
    }   catch (error) {
        containerVideos.innerHTML= `<p>Houve um erro ao carregar os videos:${error}</p>`
    } 
    // finally{
    //     alert("isso sempre acontece")
    // }
}
//O "then(então)" é basicamente a resposta a função assincrona "fetch". Assim que a promessa for cumprida com sucesso

// .catch((error)=>{
//     containerVideos.innerHTML=`<p>Houve um erro ao carregar os videos: ${error}}</p>`;
// })
//Usamos o "catch" quando queremos capturar algum erro do programa

//O código foi atualizado para melhor funcionamento. Mas com esse novo funcionamento teremos que utilizar uma outra forma de tratar os erros, nesse caso usamremos o "try/catoch". Para saber mais sobre o "try/catch" retorne em algumas aulas.
//Temos algo novo no "try/catch" um novo bloco de código chamado "finally" ou finalmente. Independente do erro ser achado ou não o finally sempre vai acontecer.

BuscareMostrarVideos();