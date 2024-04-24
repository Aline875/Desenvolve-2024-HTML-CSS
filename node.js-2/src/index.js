import fs from 'fs';
import chalk from 'chalk';



function extraiLinks(texto)
{
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map(captura => 
        ({
           [ captura[1]]: captura [2]
        }))
        return resultado.length !== 0 ? resultado: 'não há links nesse arquivo';
}

function trataErro(erro)
{
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio'));
}

//async/await
async function pegarAqruivo(caminhoArquivo)
{
    try 
    {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
         return extraiLinks(texto);
    }
    catch (erro)
    {
        trataErro(erro)
    }
}

export default pegarAqruivo;
//pegarAqruivo('./arquivos/');


// VERSÃO DO NODE NO NVM É 18.7.0

//Código sobre "promises"
// function pegarAqruivo(caminhoArquivo) 
// {
    //     const encoding = 'uft-8';
    //     fs.promises.readFile(caminhoArquivo, encoding)
    //     .then((texto) => 
//         console.log(chalk.green(texto)))
//         .catch((erro) => trataErro(erro))
// }

//Código sobre o tratamento de erro
// function pegarAqruivo(caminhoArquivo)
// {
    //     const encoding = 'utf-8';
//     fs.readFile(caminhoArquivo, encoding, (erro, texto) => 
//     {
    //         if(erro)
    //         {
        //             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }


//Código sobre as bibliotecas e sobre o caminho dos arquivos
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
        
//Houve uma segunda atualização no dia 18/04 ás 10:56. atualizamosa a funçaõ pega arquivo para que ela funcione de forma assincrona. Para lidarmos com isso nós reescrevemos a função pega arquivos e ainda utilizaremos a bibliteca "fs" porem com outros métodos nesse caso usaremos o método "then" que diz "faça essa tarefa e então ..."
        
//19/04
//As chamadas promises são "promessas" do javascript de que ele vai fazer alguma coisa e sempre utilizamos o "promises" estamos falando de código assincrcono.
        
// Falando agora sobre "async/await". Onde utilizamos o método async? utilizamos para dizer que uma função deve ser resolvida antes que o resultado retorne. Já o "await" nós usamos onde deve-se aguardar

// Atualização dia 22/04

//  \[[^[\]]*?\]  para pegar o tipo dos links
// \(https?:\/\/[^\s?#.].[^\s]*\)   Para pegar os links
//  \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
// Agora juntamos as duas expressões regulares para que o javascript possa acessar os links, porem só juntar as duas expressões  não da certo temso que dividi-la em grupos e por isso colocarmos mais um parentesese para que possamos acessar o conteudo dentro dos parenteses do texto.

// No  primeiro momento dessa aula chamamos o método "exec" para poder acessar o grupos do texto os quais criamos com o "regex" porem no exemplo acima  paramos apenas na primeira ocorrencia ou seja foi impresso apenas o primeiro liknk de cinco. Para que possamos acessar o resto dos links criaremos um looping.

//Código que foi usado no primeiro momento da aula.
// function extraiLinks(texto)
// {
//     const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
//     const capturas = regex.exec(texto);
//     console.log(capturas)
// }

// extraiLinks(textoTeste)

// na utlima linha eu disse que irianos usar um looping para resolver o problema do link, porem temos um método mais moderno que foi deixado no exemplo de código acima, nessa caso usamos o método "matchAll". Não entendi muito bem como ele funciona mas posso procurar mais sobre isso depois.

// Agora que conseguimos pegar os links que estão no arquivo, como fazemos para que o código leia qualquer arquivo dado pelo terminal? Já que por paramentro estamos passando um caminho especifico para esté codigo. Iremos ver isso nesse aula 

