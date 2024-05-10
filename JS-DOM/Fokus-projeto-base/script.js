const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const buttonMusica = document.querySelector('#alternar-musica')
const musica = new Audio('/Fokus-projeto-base/sons/luna-rise-part-one.mp3')

musica.loop = true

buttonMusica.addEventListener('change', ()=>
{
    if(musica.paused)
    {
        musica.play()
    }
    else
    {
        musica.pause()
    }
})

buttonFoco.addEventListener('click', () =>
{
    alteraContexto('foco')
    buttonFoco.classList.add('active')
})

buttonCurto.addEventListener('click', () =>
{
    alteraContexto('descanso-curto')
    buttonCurto.classList.add('active')
})

buttonLongo.addEventListener('click', () =>
{
    alteraContexto('descanso-longo')
    buttonLongo.classList.add('active')
})

function alteraContexto(contexto)
{
    botoes.forEach(function(contexto)
    {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/Fokus-projeto-base/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superficie.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`

        default:
            break;
    }

}



// buttonFoco.addEventListener('click', () =>
// {
//     html.setAttribute('data-contexto', 'foco')
//     banner.setAttribute('src', '/Fokus-projeto-base/imagens/foco.png')
// })

// buttonCurto.addEventListener('click', () => 
// {
//     html.setAttribute('data-contexto','descanso-curto')
//     banner.setAttribute('src', '/Fokus-projeto-base/imagens/descanso-curto.png')

// })

// buttonLongo.addEventListener('click',()=>
// {
//     html.setAttribute('data-contexto','descanso-longo')
//     banner.setAttribute('src', '/Fokus-projeto-base/imagens/descanso-longo.png')
// })


//Dando inicio ao curso de javascript DOM

//Trabalhando para deixar está página dinamica. No primeiro momento devemos selecionar os botões atraves de suas classes para que a cor de fundo mude. Para que isso aconteça pegamos o primeiro botão e adicionamos um "evento" neste caso é o evento de "click" passamos uma arrow function para dizer oq deve ser feito após o click, neste caso plano de fundo do "html" deve ser mudado e por isso adicionamos a tag e adicionamos um atributo. O método "setAttibute" recebe dois parametros o primeiro sendo "qual atributo você quer altera?" e "qual será a alteração", como vemos no exemplo acima, alteraremos o "data-contexto" do html e a mudança será para a outra cor de fundo, neste caso para o "foco".

//Para modificar a imagem usaremos o mesmo conceito que já utilizamos nos botões, inclusive adicionaremos essa mudança já dentro dos botões, como no exemplo acima porém a imagem tem uma caminho a seguir e nesse caso no contexto de mudança a ser feita e para que eu vou mudar nós colocamos o "src" como primeiro parametro e o caminho da imagem como segundo.

//No exemplo acima vemos que o código ficou um tanto quanto repetitivo como podemos refatorar esté código para ficar p mais breve possivel? veja no exemplo acima.

//Agora a pouco usamos um novo método "innerHTML" que é usado quando queremos adicionar um texto e algumas tags html.

//Para fazermos a aplicação dos estilos de css nos botaões utilizamos o método "classList" que adiciona ou remove classes.

//Para adicionarmos o audio no projeto precisamos adiciona-lo dentro de uma variavel, podeoms usar outro método como o "readFile()" mas isso atrapalharia um pouco a experiencia do usuario por isso adicionamos o audio a uma variavel.