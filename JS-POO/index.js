import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Aline', 'aline@gmail.com', '08-08-2003')

console.log(novoUser.exibirInfos())




// Agora falaremos sobre encapsulamento. Em POO usamos o encapsulamento não queremos que certas infomações sejam acessadas por fora do objeto, como o nome de usuário por exemplo, que não deve ser modificaso a menos que o usuário solicite a mudança. Para trabalhar com o encapsulamento usamos o método "private". No exemplo acima usaremos o parametro "nome" para explicar e exemplificar o encapsulamento.

// Para declarar um propriedade como privada nós voltamos na classe "mãe" e adicionamos uma "#" dentro de fora do constructor. Volte no "User.js" para ver. 

// Lembre-se de modificar em todo código, ou seja adicione a "#" em todos os "nome" que existirem pois "nome" e "#nome" são duas propriedades diferentes.