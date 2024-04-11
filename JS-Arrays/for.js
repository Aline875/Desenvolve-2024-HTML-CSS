const numeros = [100, 200, 300, 400, 500, 600];

//Para o laço for nós temos 3 ecpressõses "let indice = 0", "indice" e "indice++". Onde a primeria expressão é executada somente uma vez do ponto de partida. A segunda é a condição de parada desse bloco de código e a terceira é apenas o incremento que vai dar continuidade ao código ate que ele seja parado.
//OBS: nuca se esqueça de colocar o a ordem de parada se não seu código não vai parar.
//Para que o código fique sempre dinamico não se esqueça de escrever a varável.length que já diz o tamanho exato do array.

for (let indice = 0; indice < numeros.length; indice++)
{
    console.log(numeros[indice])
}

//há outra forma de escrever esse laço

for (let i = 0; i <= 6; i++ )
{
    console.log(i)
}