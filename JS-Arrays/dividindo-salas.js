const alunos = ["Aline", "Arthur", "Yonara", "Vitória", "Betânia", "Antonio", "José", "Marilene", "Maria", "Samara", "Matheus", "Alcides", "Geovanna", "Juliana", "Carlos", "Eduardo", "Taina", "Vinicios", "Weldes", "Beatriz"];

const sala1= alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice (alunos.length / 2);

console.log(sala1);
console.log(sala2);

// Uma particularidade do método "slice" é que você precisa adicionar um inicio e um fim, só que como ja sabemos a contagem se  inicia no zero ou seja comecaremos com "0" e neste caso com "aline" e terminaremos com "10" ou seja "samara"
//OBS: Também sabemos que normalmente o elemento de número "10" seria "Matheus" mas com o método "slice" o número escolhido como ultimo não sera incluido.
//OBS2: O método "slice" não altera o array original mas forma um novo array e para acessa-lo devemos criar uma nova variável e chama-la com o "console.log".
// Para deixar essa divisão de forma mais dinamica podemos usar o length para pegar o valor d.o array e dividir por dois.
