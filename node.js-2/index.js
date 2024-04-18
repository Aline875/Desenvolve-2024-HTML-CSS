import fs from 'fs';
import chalk from 'chalk';

function pegarAqruivo(caminhoArquivo)
{
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (_, texto) => 
    {
        console.log(chalk.green(texto));
    } )
};

pegarAqruivo('./arquivos/texto.md');

//Iniclialmente para que o import funcionasse tivemos que passar uma instrução para o "package.json" onde apos o "main" adicinamos uma nova seção chamada "typo" com a propriedade "modules". Dessa forma  poderemos usar as importações  daqui pra frente.

//Para pegar os aquivos de texto devemos criar uma function onde nela colocamos como parametro o "Caminho do arquivo" e um metodo chamado "encoding" depois passamos um outro parametro onde dentro dele teremos mais dois parametros, o primeiro deles sendo o retonrno de erro (que não usaremos agora) e o retorno  do texto. Dessa forma podemos usar a bibliteca "fs" para ler e imprimir os aquivos na tela. E por ultimo chamamos a função e passamos o caminho do arquivo.