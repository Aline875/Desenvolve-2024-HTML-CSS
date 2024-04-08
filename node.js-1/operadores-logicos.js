const notaFinal = 7;
const faltas = 5;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4)
{
    console.log('reprovado, Boas festas'); 
}
else
{
    console.log('Não foi reprovado por falta, Boas festas');
}

if (faltas >= 2 && !advertencias)
{
    console.log('Recebeu Bonus')
}
else
{
    console.log('Não recebeu bonus')
}

//operador lógico "||" ou "OU" diz que se uma das condições for true o final sera true caso não sera false.
//operador lógico "&&" ou "E" diz que a condição so será true se ambas a condições forem true.
//operador lógico "===" ou "comparação" é usado para comparar um valor a outro.
