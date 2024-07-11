const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFotos = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function ()
{
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function ()
{
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFotos.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");

    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "../pages/abrir-conta-form-3.html";
})

//Nós colocamos um ouvinte de eventos para capturar o clique na área da camera depois iniciasmos a câmera com o "navigator.mediaDevices". Como podemos ver no exemplo acima pedimos apenas o video e não o audio.

//Como vemos em seguida os dois ultimos códigos também utilizam o ouvinte de eventes, já que eles devem ser ativados após o clique.

//No ultimo passo nós salvamos a foto em forma de url, primeiro criamos uma variável vazia e depois para capturar a foto podemos observar o exemplo acima "botaoTirarFoto" onde o "canvas" pega o contexto do video e o captura em 2d tudo o que está dentor do bloco de imagem, a partir dai criamos a url da imagem. O próximo passo é salvar a url dessa imagem junto com todos os dados que foram inseridor no primeiro formulário de inscrição, podemos ver que buscamos novamente esse dados salvos em "const receberDadosExistentes = localStorage.getItem("cadastro");". Convertemos esse retorno em objeto e adicionamos o item "imagem" junto da url da imagem capturada anteriormente, logo depois convertemos novamente em json.
