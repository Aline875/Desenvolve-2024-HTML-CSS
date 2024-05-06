// A partir de agora trabalharesmos com classes.

class User 
{
    constructor (nome, email, nascimento, role, ativo = true)
    {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos()
    {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Aline', 'aline@gmail.com', '08-08-2003')
console.log(novoUser)
console.log(novoUser.exibirInfos())

// Para montar uma classe usamos a função "constructor" para definir o parametros da classe.
// Quando estamos trabalhando dentro de uma classe não precisamos declarar a function apenas escrever o nomedelae que aplicar o que for necessário.
