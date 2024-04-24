import chalk from "chalk";
import fs from 'fs';
import pegarAqruivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

function imprimeLista(valida ,resultado, identificador = '')
{
    if(valida)
    {
        console.log(
            chalk.blue('Lista validada'),
            chalk.black.bgGreen(identificador),listaValidada(resultado)); 
    }
    else
    {
        
            console.log(
                chalk.yellow('Lista de links'),
                chalk.black.bgGreen(identificador),resultado);
    }
}

async function processaTexto (argumentos)
{
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
     
      try
    {
        fs.lstatSync(caminho);
    } catch (erro) 
    {
        if(erro.code === 'ENOENT')
        console.log(chalk.red('Arquivo ou diretorio não existe.'));
        return;
    }

    if (fs.lstatSync(caminho).isFile())
    {
        const resultado = await pegarAqruivo(caminho);
        imprimeLista(valida, resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory)
    {
        const arquivo = await fs.promises.readdir(caminho);
        arquivo.forEach (async (nomeDeArquivo) => 
        {
            const lista  = await pegarAqruivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }

}

processaTexto(caminho);

// VERSÃO DO NODE NO NVM É 18.7.0

//Após montarmos o código para a leitura dos arquivos ".md" paraf pegar os links, criamos esse novo  arquivo para pegar a informações do terminal e parac isso criamos uma nova "const" com o método "process" e o ".argv", para que possamos pegar essas informações como argumento para ser passado para o código.

// o "process.argv" retornará uma infomação no terminal para nós no caso ele retorna o caminho dos dois códigos que usamo para acessa o arquivo pelo terminal.

//Sempre tomar cuidado ao passar o caminho do arquivo pois dependendo da pasta em que ele se encontra pode retornar o erro que escrevemos. por exemplo agora, esetive colocando o caminho errado. Como no terminal estou dentro da pasta src o código não estava conseguindo encontrar o caminho pois o arquivo está em uma pasta diferente, oque significa que eu tenho que escrever o seguinte "node cli.js ../arquivos/texto.md".

// No momento não está aparecendo o resultado dos links no terminal, pois agora a função pega arquivo não está mais com um "console.log" está apenas  retornando o resultado do texto. E como a "function" é uma função assincrona tambem temos que deixar a função "processaTexto" como assincrona.

// Nova atualização
// Para deixarmos o código mais mamleavel podemos tentar ler apenas o diretorio do arquivo e dessa forma leremos todos os links para que não precisemos colocar o nome de todos os arquivos.

// Podemos usar os métodos do fs para perguntar se é um arquivo ou diretorio, porem no caso de der true para p diretorio teremos que fazer com ele leia todos os arquivos a procura dos links

// O código inicialmente não funcinou pois precisamos deixar o "forEach" assincrono tambem.

//Atualização dia 23/04

// Quando passamos o muitas vezes quando passamos o diretorio para a pesquisa é inevitavel que erros de escrita aconteçam, como escrever "arquivo" em vez de "arquivos", nesse caso o terminal retonará um erro, mas como um usuário comum vai identificar esse erro? Para nós é muito mais facil saber o que está errado mas um usuário comum não saberia, nesse caso na atualização de hoje vamos tratar erros de escrita e deixar a identificação de erro mais facil.

// No caso do erro do diretorio enexistente nós procuramos no terminal o status desse erro, ou seja procuramos o "code:...", como nesse erro por exemplo o status retornado foi "code: 'ENOENT'" ou "erro sem entidade". Mas mesmo identificando o erro e tratando-o o resto do texto de erro continua aparecendo, então para que isso não aconteça deixamos apenas um "return".

// Quando nós passamos apenas o diretorio não sabemos exatamento qual arquivo está sendo impresso na tela. Não seria interessante se pudessemos saber qual arquivo estamos imprimindo? No exemplo acima utilizamos o "identificador" para guarda o nome do arquivo e imprimir ele na function "processaTexto". Porem ao fazermos isso, quando passarmos o nome do arquivo que queremos acessar, ele  tambem retornará algo, no caso teremos um "undefined". Resolveremos isso no exemplo acima. Como vimos anteriormente nós podemos apenas deixar o "identificador" como uma string vázia.

// Fizemos uma modificação no "package.json" para que possamos utilizar um comando menos extenso para acessar o "cli". Exemplo " "cli":"node ./src/cli.js" " dentro do "scripts".

//Nova atulização

// Novamente criamos uma atualização para o "package.json", neste caso adicionamos ao script uma nova linha para que possamos utilizar o comando "npm rub cli: valida" onde vamos fazer a validação dos links.