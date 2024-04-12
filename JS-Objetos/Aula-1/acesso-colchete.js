const cliente = 
{
    nome: 'aline',
    idade : 20,
    cpf: "4276597297",
    email: 'alinebeatriz875@gmail.com',
};

console.log(`Olá. Seja bem vinda ${cliente["nome"]} a sua idade é ${cliente["idade"]} anos`);

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach((chave)=>
{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})

//Esse método de usar colchetes é mais comumente usado quando não temos acesso as informações do objeto.
//Usamos o "forEach" para saber os valores das chaves, onde antes só tinhamos o nome agora tambem temos seus valores.