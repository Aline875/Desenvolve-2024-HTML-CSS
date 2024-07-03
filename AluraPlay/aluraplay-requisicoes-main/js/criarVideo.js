import { conectaApi } from "../js/conectaApi.js";
const formulario = document.querySelector("[data-formulario]")

async function criarVideos()
{
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descricao = Math.floor(Math.random()*10).toString();
try{
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href= "../pages/envio-concluido.html";
    }
    catch(e)
    {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideos(evento));

//A ordem dos fatores importa. Nesse caso quando importamos a função criar video devemos escrever os parametros na ordem que eles devem ser recebidos.


