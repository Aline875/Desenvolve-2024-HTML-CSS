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

cliente.enderecos.push({
    
        rua: "R. edith margot",
        numero: 543,
        apartamento: false,
        complemento: "Casa segundo-andar",
    
});

const listaApartamentos = cliente.enderecos.filter(
    (endereco)=> endereco.apartamento === true );

console.log(listaApartamentos);

//Tava dando erro por causa da chaves :´).