import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User ('aline', 'aline@gmail.com', '08-08-2003')
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin ('Arthur','arthur@gmail.com','16-03-2010')
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.nomeAdmin())
console.log(novoAdmin.nome)
novoAdmin.nome = 'beta'
console.log(novoAdmin.nome)

const novoDocente = new Docente ('Antonio', 'ninho@gmail.com', '05-03-1975')
console.log(novoDocente.exibirInfos())

// Agora falaremos sobre encapsulamento. Em POO usamos o encapsulamento não queremos que certas infomações sejam acessadas por fora do objeto, como o nome de usuário por exemplo, que não deve ser modificaso a menos que o usuário solicite a mudança. Para trabalhar com o encapsulamento usamos o método "private". No exemplo acima usaremos o parametro "nome" para explicar e exemplificar o encapsulamento.

// Para declarar um propriedade como privada nós voltamos na classe "mãe" e adicionamos uma "#" dentro de fora do constructor. Volte no "User.js" para ver. 

// Lembre-se de modificar em todo código, ou seja adicione a "#" em todos os "nome" que existirem pois "nome" e "#nome" são duas propriedades diferentes.

//Atualização dia 08/05

//Como estamos trabalhando com métodos privados, precisamos fazer algumas modificaçãoes código para que as classes filhas possam herdar as propriedades privadas tambem, para isso nós usamos o "get" e o "set".