//Nesse arquivo iremos importar a conexao que criamos em "conectaApi.js". Apartir daqui trabalharemos com modularização e precisamos deixar isso claro dentro do arquivo html onde escreveremos "type = module". Veja no arquivo html.

import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

// No exemplo acima adicionamos um "data atributes" que serve pra individualizar os elementos e conseguir manipular o dom atraves deles. Como podem ver escrevemos "data-" e um nome qualquer.

function constroiCard(titulo, descricao, url, imagem)
{
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>` 
return video;

}

async function listaVideo()
{
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideo()

//no exemplo acima utilizamos o foreach para melhor entendimento vou escrever a leitura do código. "para cada item da lista da api cria-se um card (li) que foi anexada dentro da ul que estamos referencniando como 'lista'"


