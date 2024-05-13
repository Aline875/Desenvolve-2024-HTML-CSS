const buttonA = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keya.wav')
const buttonC = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyc.wav')
const buttonD = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyd.wav')
const buttonE = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keye.wav')
const buttonQ = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyq.wav')
const buttonS = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keys.wav')
const buttonW = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyw.wav')
const buttonX = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyx.wav')
const buttonZ = new Audio ('/aluramidi-curso-arquivos-iniciais/sounds/keyz.wav')

document.querySelector('.tecla_pom').onclick = playPom;

function playPom()
{
    document.querySelector('#som_tecla_pom').play()
}


