export default function ehUmCPF(campo)
{
    const cpf = campo.value.replace(/\.|-/g,"");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSgundoDigito(cpf))
    {
        console.log("cpf inválido.")
    }
    else
    {
        console.log("cpf válido")
    }
}

function validaNumerosRepetidos(cpf)
{
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf)
{
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++)
    {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
    {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSgundoDigito(cpf)
{
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++)
    {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
    {
        soma = 0;
    }

    return soma != cpf[10];
}

//Nessa função iremos verificar o primeiro digito do cpf. Pegamos os 9 primeiros digitos do cpf e atribuimos um valor decrescente de 10 a 2, com isso usamos o laço for para passar por todos esses numeros, o multiplicador é usado após a tribuição de valores e vai multiplicar os digitos do cpf pela sua  posição. Exemplo do cpf base abaixo.

//937.777.040-83
// 9  | 3  |  7  |  7  | 7 | 7 | 0 | 4 | 0
// 10 | 9  |  8  |  7 | 6 |  5  | 4 | 3 | 2
// 90 | 27 | 56 | 49 | 42 | 35 | 0 | 12 | 0

//depois de saber a multiplicação de todos esses valores eles vão ser somados. Nesse exemplo resultara em 311. Logo depois multiplicamos o resultado da soma por 10 depois termos o resultado do modulo de divisão por 11.

//Explicação sobre modulo de divisão.
//Quando calculamos 3110 % 11, estamos procurando o resto da divisão de 3110 por 11.

// Aqui estão os passos:
// Divida 3110 por 11.
// O quociente é 282 (porque 3110 ÷ 11 = 282).
// Multiplique o quociente pelo divisor: 282 × 11 = 3102.
// Subtraia este resultado do dividendo original: 3110 − 3102 = 8

//Ainda no final da conta colocamos uma condicional na qual SE o resultado do modulo desse 10 ou 11 o "resultado" ira ser zero já que esse número deve ser igual ao primeiro digito logo após o hifem.

//Validação do segundo digito.
//É basicamente a mesma conta do primeiro digito só que agora incluiremos o primeiro digito nessa verificação ou seja inves de ser os 9 prímeiros números serão 10.