//ATENÇÃO: ESTAMOS USANDO A VERSÃO 18.17.1 DO NODE
// Sabemos que as chaves separam os códigos dentro dela formando um bloco de código para cada par de chaves, por isso no exemplo abaixo, fora do bloco de código temos uma outra variável que o javaScript entende por "var" (provavelmente só eu vou entender essa explicação k).

//o JavaScript trabalha com escopos, no caso 3 escopos, bloco, função e global. O escopo significa um limite, como no exemplo abaixo o bloco de codigo do "if" que tambem pode ser chamado de escopo.

let estudante;
if ( 1 > 0)
{
    estudante = 'Aline';
    console.log(estudante);
};
console.log(estudante);