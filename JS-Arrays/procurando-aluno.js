const alunos = ['Aline', 'Arthur', 'Yonara', 'Vitória'];
const media = [9, 7, 8, 5];

const lista = [alunos, media];

function exibeNomeENota (aluno)
{
    if(lista[0].includes(aluno))
    {
        // const alunos = lista[0];
        // const media = lista[1];

        const [alunos, media] = lista;

        const indice = alunos.indexOf(aluno);

        const mediaAluno = media[indice];


    console.log(` ${aluno} tem a média ${mediaAluno}.`);
    

    }
    else 
    {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Aline")

//Nessa aula nós vimos dois novos métodos o método "includes" e o método "indexOf". Onde o método includes percorre a lista e verifica se oque foi pedido na function realmente está la e o método "indexOf" verifica o número da posição dessa lista. É so dizer qual lista você quer acessar por meio desse "indexOf" caso tenha alguma dúvida veja o exemplo acima e verifique a documentaçao oficial do node.

//Houve uma atualização nesse arquivo onde adicionamos duas variáveis para que o código fique mais legivel deixamos claro na variável que queremos acessar as determinadas listas como em "const alunos = lista[0];"que vai acessar a lista de alunos e a "const media = lista[1];" que acessa a media, lembre-se que isso foi acessa pela lista de duas dimensões.

//Novamente o código foi atualizado para que o código fique o mais suscinto possivel. Retiramos o "const alunos = lista[0];" e o "const media = lista[1];" ja que eles utilizam "lista" duas vezes para diminuir isso nos declaramos uma nova variável "const [alunos, media] = lista;" que utiliza dos colchetes para atribuir os nomes e pegar os valores da "lista".