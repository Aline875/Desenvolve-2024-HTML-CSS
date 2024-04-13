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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos"))
{
    console.error("Erro. Endereço não cadastrado.")
}
