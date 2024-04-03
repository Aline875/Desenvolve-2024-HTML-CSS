// Conhecendo o tipo string.

const estudante = "Aline";
const docente = "Carol";
const cumprimento = "Nosso lema é 'estudar bastante!'"
const citacao = `Ju disse: "nossos lema é 'estudar bastante!'"`

//Devo dizer que peguei um odio desse acento "``" jaá que ele tambem pode ser usado em alguns codigos. Ainda  não sei o motivo, mas nesse é apenas para subtituir as aspas.

console.log(cumprimento);
console.log(citacao);

//Acabei de descobrir o motivo kkkkkkkkkkkkk.
//É apenas para ficar mais facil a concatenaçõa de textos e variaveis, para que não precisemos ficar adicionando um sinal de mais toda vez que formos contatenar um texto e um valor. Como no exemplo abaixo. Isso se chama "template string". É bom fazer o uso apenas di template string para o codigo ficar mais fluido.

console.log(`O nome da estudante é ${estudante}.`)

const senha= 'Aline123 ' + estudante.toUpperCase();
console.log(senha);

//Exercício 2

let valor1 = 0;
let abacate 
let valor2 = "10";

console.log("valor1 é do tipo", typeof valor1)
console.log("abacate é do tipo", typeof abacate)
console.log("valor2 é do tipo", typeof valor2)