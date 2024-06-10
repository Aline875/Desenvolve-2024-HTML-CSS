const containerVideos = document.querySelector('.videos__container');

const api = fetch('http://localhost:3000/videos')
//Ao buscar os dados de uma  api fake deve-se sempre colocar o link do endpoint nesse caso "http://localhost:3000/videos"
//O fetch é uma função assincrona então no momento a promise está pendente. O método de resolução ficara abaixo.

.then(res =>(res.json()))
.then((videos)=> videos.forEach((video)=>{
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
)
//O "then(então)" é basicamente a resposta a função assincrona "fetch". Assim que a promessa for cumprida com sucesso

.catch((error)=>{
    containerVideos.innerHTML=`<p>Houve um erro ao carregar os videos: ${error}}</p>`;
})
//Usamos o "catch" quando queremos capturar algum erro do programa
