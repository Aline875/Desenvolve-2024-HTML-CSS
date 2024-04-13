const cliente = 
{
    nome: 'aline',
    idade: 20,
    email: 'alinebeatriz875@gmail.com',
    telefone: ['587460638','87369782'],
};

cliente.endereço =
{
    rua: "R. Mauro Mota.",
    numero: 67,
    apartamento: true,
    complemento: "apt 879",
};

console.log(cliente.endereço);

//Podemos atribuir um objeto dentro de um objeto já existente, como no exemplo acima onde atruibuimos o objeto endereço dentro do objeto cliente. 