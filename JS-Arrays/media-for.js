const notas = [10, 7.5, 8, 9,];

//CARA!!!! Finalmente descobri como renomear todas as palavras de uma vez que alegria!!!!!!! É só clicar na plavra até selecionar todas elas e apertar f2. Nunca fui triste.

let somaNotas = 0;

for(let i = 0; i < notas.length ; i++)
{
    somaNotas += notas[i];
}

//nesse laço ele pega a nota na primeira posição do array e soma com a proxima nota até que o array acabe

const media = somaNotas/notas.length;

console.log(`A média  das notas é ${media.toFixed(1)}`);