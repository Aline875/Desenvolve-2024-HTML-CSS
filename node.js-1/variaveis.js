// Ao atribuir o "const" a variavel estudante não se pode fazer nenhuma alteração, pois ao fazer isso ira retornar um erro de tipo já que a variavel é constante e não deve ser modificada.

// Há 3 formas de trabalhar com variaveis em javaScript, "var", "const" e "let". Var e let tem uma composição similar  já que ambas podem ser alteradas.

// É mais comum o uso da palavra-chave "const" pois ela funciona melhor no código já que não faremos modificações constantes em nossas variáveis, tornando-a a mais comum entre os devs, isso não significa que não podemos ou não devemos usar as outras palavras, apenas que não as utilizaremos muito outra palavra comunmente usada é o "let" que funciona da mesma forma que "var", mas a utilizaremos apenas se tivermos certeza que iremos modificar a variável.

//Algumas diferenças entre o "const" e o "let" são que o const retorna um erro caso ele não receba um valor, o let podeficar vazio ate o momento em que a variavel seja declarada mais a frente.
const estudante = 'Aline';
let professora ='Maria';


console.log(estudante, professora);