const clientes = require("./cliente.json");

function filtrarAparatamentos(clientes)
{
    return clientes.filter((cliente)=>
    {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
};

const Filtrados =filtrarAparatamentos(clientes);

console.log(Filtrados);

//Passamos um filtro para os clientes que tem apartamento mas não tem complemento. Nesse caso usamos o return para que pegue as informações do arquivo json e pergunte se tem apartamento como "true" depois perguntamos se o objeto endereço não tem a propriedade complemento dentro dele. Caso os dois voltem "true" serão impressos todos os clientes que estão sem complemento e que moram em apartamentos.