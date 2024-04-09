const notas = [10, 7, 8]

notas.push(7);
//Apenas verificando se o "push" funcionou
//O o termo "push" vem do ingles de empurrar ou adicionar  e faz com o que um novo objeto seja adicionado ao array.

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A sua média é ${media.toFixed(1)}`);

//Mesmo a variável notas sendo uma constante nós podemos modificala utilizando metodos exclusivos do javaScript. No caso a unica coisa que somos impedidos de fazer com uma constante é atribuir uma nova atribuição a essa constante.