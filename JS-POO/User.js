// A partir de agora trabalharesmos com classes.

export default class User 
{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo = true)
    {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome()
    {
        return this.#nome
    }

    get email()
    {
        return this.#email
    }

    get nascimento()
    {
        return this.#nascimento
    }

    get role()
    {
        return this.#role
    }

    get ativo()
    {
        return this.#ativo
    }

    set nome(novoNome)
    {
        if (novoNome === '')
        {
            throw new Error('Formato inválido')
        }
        this.#nome = novoNome
    }

    // #montaObjUser()
    // {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos()
    {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}



// const novoUser = new User('Aline', 'aline@gmail.com', '08-08-2003')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// Para montar uma classe usamos a função "constructor" para definir o parametros da classe.
// Quando estamos trabalhando dentro de uma classe não precisamos declarar a function apenas escrever o nomedelae que aplicar o que for necessário.
//Trabalhando com modulos de exportação nós precisamos adicionar uma propriedade ao "package.json", neste caso usamos o " "type":"module" ".

//Atualização dia 08/05

//Anteriormente usamos o "#montaObj" para pegar a propriedades privadas e mandar para um método publico, mas neste momento estamos usando o método "get" para fazer isso. Vou deixar o exemplo acima do "montaObj" e o método "get".

//Com relação a esse dois métodos o "get" não aceita nenhum parametro e o  "set" aceita somente uma parametro, normalmente quando vamos atribuir um novo valor.

//Como nome já é uma propriedade privada usamos o set para modifica-la, porém como visto anteriormente o método "set" pode receber somente um parametro, e esse parametro é usado para  montar lógicas dentro da modificaçõa da propriedade. Podemos fazer uma vereficação de caracteres por exemplo.

//Trabalharemos agora com o polismorfismo, onde temos os mesmo método com funções diferente, vou dar um exemplo, quando criamos o "constructor" do "docente" usamos os mesmos parametro de "user" e "admin" porem como podemos ver abaixo o "role" para "docente" é diferente tanto para "admin" quando para "user" dessa forma nós reotilizamos a estrutura  e modificamos apenas o que adequa a situação.

// constructor(nome, email, nascimento, role = 'docente' , ativo = true)
// {
//     super(nome, email, nascimento, role, ativo)
// }