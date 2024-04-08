const estaAprovado = true;

if( estaAprovado === true)
{
    console.log('Aprovado')
}

if('0' == 0)
{
    console.log('passou na comparação')
}

else
{
    console.log('Não passou na comparação')
}

//quando utilizamos três iguas estamos comparando não só o conteudo como tambem o tipo ou seja utilizando apenas dois igausi estamos comparando apenas o conteudo e por esse motivo ele retorna true.

const idadeMinima =  18;
const idadeEstudante = 16;

if(idadeEstudante >= idadeMinima)
{
    console.log('Não precisa de autorização.');
}
else
{
    console.log('precisa de autorização.')
}

//para garantir o melhor funcionamento do código a melhor opção é usar os três iguais.