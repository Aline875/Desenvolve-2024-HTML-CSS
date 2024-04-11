const notas = [10, 7.5, 8, 9, 6];

const notasAtualizadas = notas.map((nota)=>
{
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas)

//Tentei usar o incremento mas aparentemente ele não funciona aqui então utilizei o método do professor e deixei a soma assim mesmo.
//Aquilo ali se chama operador ternario é melhor procurar mais sobre isso depois.
//Para utilizar o método "map" é necessario criar uma nova variáviel já que ele não altera o array origonal.