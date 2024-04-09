//iniciamos o curso de arrays com js 

// const nota1 = 10;
// const nota2 = 7;
// const nota3 = 7.5;
// const nota4 = 6;

//Começamos com o básico a presentação de uma array para o calculo da média de vários alunos.

const notas = [10, 7, 7.8, 6]

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A sua media é ${media}`);

//Apenas lembre-se que em arrays a contagem se inicia no "0" ou seja para acessar a nota "10" colocamos "0" em colchetes.

console.log(notas[2])

//para que não precisemos mudar o número da divisão usamos o nome da variável e adicionamos o "length".
