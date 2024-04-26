const user = 
{
    nome: 'aline',
    email: 'alinebeatriz875@gmail.com',
    nascimento: '2024/04/25',
    cargo: 'estudante',
    ativo: true,
    exibirInfos: function()
    {
        console.log(this.nome, this.email)
    }
};


const admin = 
{
    nome: 'narinha',
    email:'yonanara@gmail.com',
    nascimento:'26/04/2024',
    cargo: 'admin',
    ativo: true,
    criarCurso()
    {
        console.log('curso criado com sucesso!')
    }
}

Object.setPrototypeOf(admin,user)
admin.criarCurso()
admin.exibirInfos()


// A partir de agora iremos usar o conceito de classe.

//Atualização dia 26/04

// O javaScript originalmente trabalhava com herança de protótipo. Que seria passar propriedades de objetos para outros. Mas com a migração de dev de outras linguagens, tiveram adaptar para que a sintaxe ficasse mais entendivel pra quem já estava acostumado com a sintaxe de classes.

//É bom dar uma pesquisada a mais nessa coisa de herança de protótipo já que as classes no javaScript foram criadas em cima dele.

// No exemplo acima nós atruimos "user.exeibirInfos" a varável "exibir" porem no terminal quando chamamos "exibir" ele não me retorna nada. No momento em que fazemos essa atribuição "exibirInfos" perde a conexção com o "user". Para que ele não perca essa conexção usamos um método chamado "bind", desse modo ele da contexto ao código que se perdeu. Deixarei o código abaixo para melhor aproveitamento da aula.


// user.exibirInfos()

// const exibir = user.exibirInfos
// exibir()

// const exibir = function()
// {
//     console.log(this.nome)    
// }

// const exibirNome = exibir.bind(user)

// exibirNome()
// exibir()

// Como estamos trabalhando com herança de protótipo, assim como o próprio nome diz temos que fazer com que os códigos herdem funções um do outro, desse modo fazemos a reeutilazação desses códigos sem precisar escreve-los. e para que nos exemplo acima o objeto "admin" herde certas propriedades de "user" nós usamos uma propriedade do método "object" chamado "setPrototypeOf" que pega a propriedade desejada e atribui ao novo objeto. o "setPrototypeOf" precisa de dois parametros para funcionar, o primeiro é o objeto que vai herdar a priedade e o segundo é de quem o primeiro parametro vai herdar a propriedade.

