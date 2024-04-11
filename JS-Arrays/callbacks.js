const nomes = ['Aline', 'Arthur', 'Antonio', 'Betania'];

nomes.forEach (function(nomes)
{
    console.log(nomes);
});

//Arow function

nomes.forEach ((nomes) =>
{
    console.log(nomes);
});

//Outra forma de utilizar funções callback

function imprimeNome(nomes)
{
    console.log(nomes);
}

nomes.forEach(imprimeNome);

