const cliente = 
{
    nome: 'aline',
    idade : 20,
    cpf: "4276597297",
    email: 'alinebeatriz875@gmail.com',
};

console.log(`Olá. Seja bem vinda ${cliente.nome} a sua idade é ${cliente.idade} anos`);
console.log(`Os 3 primeiros digitos do seu CPF são ${cliente.cpf.substring(0, 3)}.`)

//Para acessar as informações dessa classe chamada "cliente" utilizamos o "ponto" para que possamos usar o métodos de dentro da classe e imprimir a informação desejada.
//Ao tentar inmprimir o "CPF" não podemos mostrar ele completo e por isso declaramos ele como string. Para que possamos usar um método chamdao "substring" onde vamos dividir o string original para que mostre até onde desejamos. Como pode ver no exemplo acima iniciamos a contagem no 0 e imprimimos até o terceiro elemento dessa  string.