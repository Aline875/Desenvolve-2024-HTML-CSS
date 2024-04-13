const cliente = 
{
    nome: 'aline',
    idade: 20,
    email: 'alinebeatriz875@gmail.com',
    telefone: ['587460638','87369782'],
};

cliente.enderecos =
[
    {
        rua: "R. Mauro Mota.",
        numero: 67,
        apartamento: true,
        complemento: "apt 879",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial)
{
    console.log(`ligando para o telefone comercial ${telefoneComercial}`)
    console.log(`ligando para o telefone residencial ${telefoneResidencial}`)
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
//Priemira forma testada para o espalhamento do objeto.
//nunca se esqueça de declarar as varáveis que vão ser utilizadas dentro da função.

ligaParaCliente(...cliente.telefone);

const encomenda = 
{
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)

//Imagine que precisamos mandar a encomenda para o cliente, precisamremos do seu nome e do seu endereço porem endereço é um outro objeto, para que passamos utilizar o nome e o endereço dentro de um só array nos usamos o método de espalhamento que são as reticencias "..." e dizemos a posição do endereço prioritario do cliente.

