const notaPrimeiroBi = 8;
const notaSegundoBi = 6.5;
const notaTerceiroBi = 7;
const notaQuartoBi = Number.parseInt('5');
const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;
const media = total/4;

console.log('O total das minhas nota é de ' + total)

console.log('A minha média é de ' + media.toFixed(1))
//Muito parecido com o "Math.round" o "tofixed" tem o mesmo proposito de aredondar as casa decimais, mas diferente do math.round o tofixed precida que o desenvolvedor diga qunatas casas decimais devem ser mostradas. Lembrando que só vale para numeros após o ponto.