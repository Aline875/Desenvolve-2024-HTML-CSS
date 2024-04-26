function User(nome,email) 
{
    this.nome = nome
    this.email = email
    
    this.exibirInfos = function () 
    {
        return `${this.nome}, ${this.email}`
    }
}

const user = 
{
    init: function (nome, email) 
    {
        this.nome = nome
        this.email = email    
    },

    exibirInfos: function () 
    {
        return this.nome    
    }
}

const novoUser = Object.create(user)
novoUser.init('aline', 'aline@gmail.com')
console.log(novoUser.exibirInfos())

// Normalmente vemos que  o javaScript não usa letras maisculas no inicio de funções a não ser nesses casos onde estamos escrevendo uma classe.

// Usamos primeior o return pois não estamos atribuindo um valor no "User" inicial portanto devemos retornar o valor indefinido para que ele seja atribuido mais a frente. Para podermos acessar e dar um valor a classe "User" usamos o método "new" e pagamos o "User" como protótipo para atribuir esse valores. Essa forma de atribuir um novo valor é chamada de "constructor".

// const novoUser = new User('aline', 'aline@gmail.com')
// console.log(novoUser.exibirInfos())

// Agora usando o método "call", pegamos o contexto de "User" e passamos como parametro do método "call" dessa forma podemos reaproveitar as informações dentro do "User". Mais abaixo no código implementamos o "role" ou "cargo" no caso o tipo de usuário que está acessando a pagina e como mostrado caso o usuário não receba nehuma permissão extra, ele vai ser por padrão um "estudante".

// Usar o método "object.create" não é muito diferente de o new a principal diferença é que criaremos um novo objeto "admin" com as propriedades do objeto principal "user" com novas informações

// function Admin (role) 
// {
    //     User.call(this, 'aline', 'aline@gmail.com')
    //     this.role = role || 'estudante'
    // }
    
    // Admin.prototype = Object.create(User.prototype)
    // const novoUser = new Admin('adm') 
    // console.log(novoUser.exibirInfos())
// console.log(novoUser.role)


