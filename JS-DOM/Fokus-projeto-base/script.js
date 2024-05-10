const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')

buttonFoco.addEventListener('click', () =>
{
    html.setAttribute('data-contexto', 'foco')
})

buttonCurto.addEventListener('click', () => 
{
    html.setAttribute('data-contexto','descanso-curto')
})

buttonLongo.addEventListener('click',()=>
{
    html.setAttribute('data-contexto','descanso-longo')
})

//Dando inicio ao curso de javascript DOM

//Trabalhando para deixar está página dinamica. No primeiro momento devemos selecionar os botões atraves de suas classes para que a cor de fundo mude. Para que isso aconteça pegamos o primeiro botão e adicionamos um "evento" neste caso é o evento de "click" passamos uma arrow function para dizer oq deve ser feito após o click, neste caso plano de fundo do "html" deve ser mudado e por isso adicionamos a tag e adicionamos um atributo. O método "setAttibute" recebe dois parametros o primeiro sendo "qual atributo você quer altera?" e "qual será a alteração", como vemos no exemplo acima, alteraremos o "data-contexto" do html e a mudança será para a outra cor de fundo, neste caso para o "foco".