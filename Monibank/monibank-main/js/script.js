import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeidade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]')

formulario.addEventListener("submit", (e) => 
{
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    } 

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = '../pages/abrir-conta-form-2.html';
})
camposDoFormulario.forEach((campo)=>
{
    campo.addEventListener("blur", ()=> verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefaut())
})

const tiposDeErro = 
[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo)
{
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11)
    {
        ehUmCPF(campo);
    }

    if(campo.name == "aniversario" && campo.value !="")
    {
        ehMaiorDeidade(campo);
    }
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    //Imprimindo a mensagem na tela 
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput)
    {
        mensagemErro.textContent = mensagem;
    }
    else
    {
        mensagemErro.textContent ="";
    }

}

//Para imprimir as mensagens de erro na tela nos usamos o metódo "forEach" ou seja para cada erro encontrado impirmiremos uma  mensagens de acordo com o tipo do erro, como deixamos claro usando o "if" se cada campo retornar true com um erro imprima a mensagem de acordo com o tipo.

//No área "imprimindo a mensagem na tela". Não sei explicar exatamente oque está acontecendo mas o "mensagemErro" está bucando as mensagens de erro existentes dentro do código (preciso pesquisar oque é esse "parentNode", aparentemente ele faz com que a mensagem apareça só no input clicado, mas não tenho certeza). Já o "validadorDeInput" chaca a validação do input. Caso o contéudo for se provado um erro a mensagem será impressa, caso não o processo continuará normalmente.