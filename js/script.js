import ehumCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing', // campo vazio
    'typeMismatch', // o tipo  do elemento nao combina com o dado inserido EX: e-mail
    'patternMismatch', // se o dado nao seguir um determinado padrao nao vai aceitar
    'tooShort', // dado inserido curto, confirme o padrao solicitado
    'customError' // customizavel
]


function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehumCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    console.log(campo.validity);
}