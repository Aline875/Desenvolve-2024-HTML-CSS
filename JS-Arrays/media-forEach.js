const notas = [10, 7.5, 8, 9,];

let somaNotas = 0

notas.forEach(function (notas)
{
    somaNotas += notas;
    
});

//Em casos de array sempre chame ele dentro da function para que ele possa ser chamado dentro da função.

const media = somaNotas / notas.length;

console.log(`A media é de ${media.toFixed(1)}`);

// O "forEach" funciona parecido com o "for Of" ele já fornece o número de elementos existentes dentro do array. Porem uma das vantagens do "forEach" em relação ao "for of" é  que podemos adicionar mais de um parametro, como um "indice" por exempolo, que vai retornar os números das posições dentro do array.