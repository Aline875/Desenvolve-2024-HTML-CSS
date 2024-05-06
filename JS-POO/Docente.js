import User from "./User.js";

export default class Docente extends User
{
    constructor(nome, email, nascimento, role = 'docente' , ativo = true)
    {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, Curso)
    {
        return `Estudante ${estudante} passou no curso de ${Curso}, parabéns`
    }
}

// const novoDocente = new Docente ('Arthur', 'arthur@gmail.com', '16-03-2003')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('beta', 'culinaria'))

// Caso tenha dúvidas volte no arquivo "Admin".