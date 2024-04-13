const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//A função require pega um arquivo json e tranforma ele em um arquivo usável.

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString)

//Para transformar json em string

//Apenas objetos podem ser interativos dentro de código.

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente)