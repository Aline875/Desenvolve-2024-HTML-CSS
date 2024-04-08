const notaPrimeiroBi = 7;
const notaSegundooBi = 8;
const notaTerceiroBi = 7.5;
const notaQuartoBi = 9.5;

let media = (notaPrimeiroBi + notaSegundooBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7)
{
    media += media * 0.1;
}

console.log(`A méida é ${media.toFixed(1)}`);


//O simbolo de "+=" é o mesmo que pegar a variavel e atribuir um novo valor, nesse caso a variavel media sera multiplicada por "0.1".

//Exercício 3

let estoqueProdutoA = 50;

function venda(quantidade)
{
    if(quantidade > estoqueProdutoA)
    {
        console.log("Quantidade insuficeinte em estoque.");
    }
    else
    {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. estoque de atual ${estoqueProdutoA}`);
    }
}