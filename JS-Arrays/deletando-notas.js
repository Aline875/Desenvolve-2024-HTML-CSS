const notas = [10, 7, 8, 7, 9]

notas.pop();

console.log(notas)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A sua média é ${media.toFixed(1)}`);

//O método "pop" é usado para deletar a ultima nota.
//Existem muitos outros métodos para modificar esse array mas não os veremos agora.