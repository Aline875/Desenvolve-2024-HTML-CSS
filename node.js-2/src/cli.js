import chalk from "chalk";
import fs from 'fs';
import pegarAqruivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultado)
{
    console.log(chalk.yellow('Lista de links'), resultado);
}

async function processaTexto (argumentos)
{
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile())
    {
        const resultado = await pegarAqruivo(caminho);
        imprimeLista(resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory)
    {
        const arquivo = await fs.promises.readdir(caminho);
        arquivo.forEach (async (nomeDeArquivo) => 
        {
            const lista  = await pegarAqruivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista);
        })
    }

}

processaTexto(caminho);


//Após montarmos o código para a leitura dos arquivos ".md" paraf pegar os links, criamos esse novo  arquivo para pegar a informações do terminal e parac isso criamos uma nova "const" com o método "process" e o ".argv", para que possamos pegar essas informações como argumento para ser passado para o código.

// o "process.argv" retornará uma infomação no terminal para nós no caso ele retorna o caminho dos dois códigos que usamo para acessa o arquivo pelo terminal.

//Sempre tomar cuidado ao passar o caminho do arquivo pois dependendo da pasta em que ele se encontra pode retornar o erro que escrevemos. por exemplo agora, esetive colocando o caminho errado. Como no terminal estou dentro da pasta src o código não estava conseguindo encontrar o caminho pois o arquivo está em uma pasta diferente, oque significa que eu tenho que escrever o seguinte "node cli.js ../arquivos/texto.md".

// No momento não está aparecendo o resultado dos links no terminal, pois agora a função pega arquivo não está mais com um "console.log" está apenas  retornando o resultado do texto. E como a "function" é uma função assincrona tambem temos que deixar a função "processaTexto" como assincrona.

// Nova atualização
// Para deixarmos o código mais mamleavel podemos tentar ler apenas o diretorio do arquivo e dessa forma leremos todos os links para que não precisemos colocar o nome de todos os arquivos.

// Podemos usar os métodos do fs para perguntar se é um arquivo ou diretorio, porem no caso de der true para p diretorio teremos que fazer com ele leia todos os arquivos a procura dos links

// O código inicialmente não funcinou pois precisamos deixar o "forEach" assincrono tambem.