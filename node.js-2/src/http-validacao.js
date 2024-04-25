import chalk from "chalk";
function extraiLinks(arrlinks) 
{
  return arrlinks.map((ObjectoLink) => Object.values(ObjectoLink).join()) 
}

async function checaStatus (listaUrls) 
{
  const arrayStatus = await Promise.all(
    listaUrls.map(async(url) => 
    {
      try {
        const response = await fetch (url)
        return response.status;
      } catch (erro) {
        return manejaErros(erro);
      }
    })  
  )
  return arrayStatus
}
  
function manejaErros(erro) 
{
  if (erro.cause.code === 'ENOTFOUND') 
  {
    return 'link não encontrado.'
  } 
  else
  {
    return 'ocorreu algum erro'
  }
}
 export default async function listaValidada(listaDeLinks)
    {
      const links = extraiLinks(listaDeLinks);
      const status = await checaStatus(links);
      return listaDeLinks.map((objeto, indice)=> (
        {
          ...objeto, status: status[indice]
        }));
    }

    //[gatinho salsicha](http://gatinhosalsicha.com.br/)
    
    // VERSÃO DO NODE NO NVM É 18.7.0
    
    //Criamos uma function para fazer a validação dos links.
    
    
    // Atualização dia 25/04
    
//Criamos uma nova function para extrair os links de dentro do array. Na function "extraiLinks" nós usamos o método "map" para percorrer o array e passar eles por "object.values" para receber os valores das chaves, que no caso são os links.

//Obs: Nunca se esqueça de retornar a arrow function.

// Tem algo errado minha lista de links não está retornando uma string, mas sim uma unica linha com todos os links  "Lista validada  https://developer.mozilla.org/pt-BR/docs/Web/API/FileList,https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input,https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer,https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement,https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes,https://httpstat.us/404,http://gatinhosalsicha.com.br/" .Vou voltar nos outros videos e ver se fiz algo errado.

// Deixa pra lá ja descolbri. Era o chal que tava dando conflito com outro chalk que eu ja tinha escrito em outro código. Então é bom ter cuidado na hora de importar bibliotecas para que elas não entrem em conflito.

// Vamos iniciar a validação com os links, já coseguimos seperar a url em um array de strings desse modo podemos pegas um por um validar. Antes de saber como faremos isso ralmente, darei um palpite. Talvez usemos um looping para percorrer esse array mas ainda não sei o que podemos fazer para acessar esses links sem precisar entrar em um navegador.

// Aparentemente usaremos o status retornado de todos os links como o status 200 por exemplo, o que tava na cara já que é literalmente o nome do arquivo.

// Iremos usar uma API chamada "fetch" para retornar o status code dos links. Como no exemplo abaixo.

// const res = await fetch('https://nodejs.org/api/documentation.json');
// if(res.ok)
// {
//   const data = await res.json();
//   console.log(data);
// }

//Como colocamos um método "map" no código nos tambem precisamo deixar claro dentro do "map" que ele é uma função async se não o código não funciona, no momento para nós a promessa ainda voltou pendente o que significa que ainda tem algum código assincrono que não indentificamos. Nesse caso o problema está na function "checaStatus" já que o "fetch" só lida com um caso por vez a maneira de resolver vai estar no código acima.

// Nova atualização iremos incrementar a nossa function "listaValidada" para que ela retorna tanto a lista de links quanto o status code desses links.

// Lembre-se que para retornar um objeto precisamos englobar as "chaves" dentro de um "parenteses" ou seja "({})". 

//O programa da erro quando tenta ler o "gatinho salsicha" pois é um endereço que não existe dessa maneira ele não consegue acessa-lo e não consegue retornar um status code.