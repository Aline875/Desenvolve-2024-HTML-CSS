//Botão adicionar tarefa
//Aperte ctrl + f para encontrar palavras mais  facil
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdcionarTarefa = document.querySelector('.app__form-add-task')

btnAdicionarTarefa.addEventListener('click', () => {
    formAdcionarTarefa.classList.toggle('hidden')
})