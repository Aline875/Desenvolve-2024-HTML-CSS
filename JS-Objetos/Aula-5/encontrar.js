const clientes = require("./cliente.json");

function encontrar(lista, chave, valor)
{
    return lista.find(item => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);
console.log(encontrado2);


//Ao tentar encontrar um cliente pelo telefone o retorno foi "undefined". Como o array de número tem dois números, o código não consegue encontrar o cliente por causa da igualdade absoluta, mas como estamos trabalhando com um array podemos fazer o uso de seu métodos para nosso próprio benefício. Nesse caso nós usamos o método "includes".