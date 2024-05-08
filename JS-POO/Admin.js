import User from "./User.js";

export default class Admin extends User
{
    constructor (nome, email, nascimento, role = 'admin' , ativo = true)
    {
        super(nome, email, nascimento, role, ativo)
    }

    nomeAdmin()
    {
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas)
    {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

// const novoAdmin = new Admin('Aline', 'aline2@gmail.com', '08-08-2003')
// console.log(novoAdmin)
// console.log(novoAdmin.criarCurso('JS', 15))

// Para que a classe "Admin" possa herdar as propriedades de "User" utilizamos o método de classe "extends" que busca as informações dentro de "User".
//Usamos o método "super" para aplicar as informações encontradas pelo "extends". Depois de definirmos o que queremos buscas na classe "User" nós reaplicamos essas propriedades dentro do método "super" como no exemplo acima.