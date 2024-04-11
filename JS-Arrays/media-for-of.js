const notas = [10, 7.5, 8, 9,];

//Esse for basicamente percorre o array e imprime cada um dos elementos
//Não se esqueça de declarar uma váriavel para a soma e inicia-la sempre  da posição que deseja iniciar a soma. Na verdade eu acabei de descobrir que iniciamos a variável com "0" para que ele não altere o valor da soma no final já que estamos usando essa variável para fazer uma soma e caso ela não seja iniciada em 0 o número que foi atribuido a variável sera somado junto com o array. 

let somaNotas = 0;

for(let nota of notas)
{
    somaNotas += nota 
}

const media = somaNotas / notas.length;

console.log(`A media das notas é ${media.toFixed(1)}`);

//A diferença fo "for of" para o "for" comum é que eu posso usar o "for" de forma mais flexivel.