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

for(let chave in cliente)
{
    let tipo = typeof cliente[chave];
    if(tipo != 'object' && tipo != 'function')
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
};

//O "for in" varre o nosso objeto e o retorna para impressão, porem ele não consegue retornor um objeto dentro de objeto e por isso pergunatomos o seu tipo e passamos uma condição de "se o tipo das propriedades do cliente forem objeto ou função retorne apenas so parametros comuns.".