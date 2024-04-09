const alunos = ["Aline", "Arthur", "Yonara", "Vitória", "Betânia", "Antonio"];

alunos.splice(1, 2, "Marcus")
console.log(alunos)

// Não confunda com "slice"
//No splice utilizamos o primeiro parametro indicar qual o primerio item a ser deletado já o segundo é para indicar a quantidade de itens que vão ser deletados junto com o primiero neste caso começaremos com "Arthur" e exluiremos 2 elementos incluindo "Arthur" e mais outro neste caso "Yonara."
//O "splice" também faz a adicição assim com o método "push".