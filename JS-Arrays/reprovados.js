const alunos = ['Aline', 'Antonio', 'Arthur', 'Betania'];
const notas = [10, 4, 6, 8];

const reprovados = alunos.filter((_, indice) => 
{
    return notas[indice]< 7;
});

console.log(reprovados)

//Basicamente é so abrir uma arrow function e adicionar a condição. Nesse caso estavamos interessados apenas no indice e não utilizamos o primerio termo "aluno" então podemos deixar apenas com um "_"medi