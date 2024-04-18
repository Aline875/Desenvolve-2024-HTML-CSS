import fs from 'fs';
import chalk from 'chalk';


function trataErro(erro)
{
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio'));
}


function pegarAqruivo(caminhoArquivo)
{
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (erro, texto) => 
    {
        if(erro)
        {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegarAqruivo('./arquivos');

// function pegarAqruivo(caminhoArquivo)
// {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoArquivo, encoding, (_, texto) => 
//     {
//         console.log(chalk.green(texto));
//     } )
// };

// pegarAqruivo('./arquivos/texto.md');

//Iniclialmente para que o import funcionasse tivemos que passar uma instrução para o "package.json" onde apos o "main" adicinamos uma nova seção chamada "type" com a propriedade "modules". Dessa forma  poderemos usar as importações  daqui pra frente.

//Para pegar os aquivos de texto devemos criar uma function onde nela colocamos como parametro o "Caminho do arquivo" e um metodo chamado "encoding" depois passamos um outro parametro onde dentro dele teremos mais dois parametros, o primeiro deles sendo o retonrno de erro (que não usaremos agora) e o retorno  do texto. Dessa forma podemos usar a bibliteca "fs" para ler e imprimir os aquivos na tela. E por ultimo chamamos a função e passamos o caminho do arquivo.

// O código foi atualizado no dia 18/04 para que possa se adquar caso volte um erro. código antigo ficara acima para revisão.

//Criamos uma função para que possamos "tratar" desse erro no caso nos usamos o "throw" para "lançar" o erro para fora do programa para ele possa ser impresso na tela. 