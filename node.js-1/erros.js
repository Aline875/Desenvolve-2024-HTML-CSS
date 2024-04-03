//console.log(variavel);
//erro do codigo acima.

// $ node erros.js
// C:\Users\Aline\GitHub\Desenvolve-2024-HTML-CSS\node.js-1\erros.js:1
// console.log(variavel);
//             ^

// ReferenceError: variavel is not defined
//     at Object.<anonymous> (C:\Users\Aline\GitHub\Desenvolve-2024-HTML-CSS\node.js-1\erros.js:1:13)
//     at Module._compile (node:internal/modules/cjs/loader:1256:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//     at Module.load (node:internal/modules/cjs/loader:1119:32)
//     at Module._load (node:internal/modules/cjs/loader:960:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.17.1

//esse código esta informando um erro de variável não definido 

// console.log('oi'

// $ node erros.js
// C:\Users\Aline\GitHub\Desenvolve-2024-HTML-CSS\node.js-1\erros.js:22
// console.log('oi'
//             ^^^^

// SyntaxError: missing ) after argument list
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1178:20)
//     at Module._compile (node:internal/modules/cjs/loader:1220:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//     at Module.load (node:internal/modules/cjs/loader:1119:32)
//     at Module._load (node:internal/modules/cjs/loader:960:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.17.1

//esse é um erro de sintax, no caso está faltando oo fechamento do parenteses

//Exerício 1

let numero = 10;
let nome = "Aline";

if (numero === 10 )
{
    console.log("O número é 10.");
}
else
{
    console.log ("O número não é 10")
}

if (nome === "Aline")
{
    console.log("Seja Bem-vinda, Aline");
}
else
{
    console.log("você não é Aline")
};

const nome1 = 'Aline';
const numero1 = 20;
const bool = true;

console.log(nome1, numero1, bool);

const nome2 = 'Aline ';
const sobrenome = 'Araujo';
const nomeSobrenome = nome2 + sobrenome;

console.log(nomeSobrenome);

const nome3 = 'Aline'
const idade = 20;

console.log("olá meu nome é " + nome3 + " e tenho " + idade + " de idade.")