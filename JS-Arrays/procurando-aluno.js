const alunos = ['Aline', 'Arthur', 'Yonara', 'Vitória'];
const media = [9, 7, 8, 5];

const lista = [alunos, media];

function exibeNomeENota (aluno)
{
    if(lista[0].includes(aluno))
    {

    const indice = lista[0].indexOf(aluno);

    const mediaAluno = lista[1][indice];


    console.log(` ${aluno} tem a média ${mediaAluno}.`);
    

    }
    else 
    {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Aline")

//Nessa aula nós vimos dois novos métodos o método "includes" e o método "indexOf". Onde o método includes percorre a lista e verifica se oque foi pedido na function realmente está la e o método "indexOf" verifica o número da posição dessa lista. É so dizer qual lista você quer acessar por meio desse "indexOf" caso tenha alguma dúvida veja o exemplo acima e verifique a documentaçao oficial do node.
