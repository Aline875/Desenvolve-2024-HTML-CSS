const salaJS = [9.8, 6.5, 8.3, 7.4, 6.8, 7.5,8,];
const salaPy = [9, 8,6.5, 8, 7, 4.6, 8.7, 5.3, 6];
const salaJava= [8.6, 5.8, 3.7, 4, 6, 8, 7];

function calculaMedia(notasDaSala)
{
   const somaDasNotas = notasDaSala.reduce((acumulador, nota)=>
    {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;
    return media.toFixed(1);

}

console.log(`A média da sala de javaScript é de ${calculaMedia(salaJS)}`)

console.log(`A média da sala de Python é de ${calculaMedia(salaPy)}`)

console.log(`A média da sala de java é de ${calculaMedia(salaJava)}`)

//Esse é um pouco estenso e eu não entendi direito vou pesquisar um pouco mais tarde.
//O acumulado começa com o valor 0 que foi difinido no final do método reduce e vai somar com a primeira  nota e assim por diante onde eke pega o primeiro valor vai somar com os valores seguinte até que não exista valor para somar.