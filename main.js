// ============================= VALIDAÇÕES COM regeEXP ==================

let numCpf = document.querySelector('#cpf');
let numCell = document.querySelector('#cell');
let emailInput = document.querySelector('#email');

// Objeto formulario
const formulario = {
    // funções que pegam o valor do input e faz modifcações de acordo com o que o usuario for digitando dinamicamente
    cpf(valor) {
        return valor
            .replace(/\D/g, '') // -> filtra todos os caracteres e trocar por vazio
            .replace(/(\d{3})(\d)/, '$1.$2') // pegar os tres primeiros digitos e colocar um .
            .replace(/(\d{3})(\d)/, '$1.$2') // pegar os tres primeiros digitos e colocar um .
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // pegar os tres primeiros digitos e os dois  ultimos digitos e colocar um -
    },

    cell(valor) {
        return valor
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{1})/, '$1')
            .replace(/(\d{5})(\d{4})/, '$1-$2')
    },

    email(email) {
        var re = /\S+@\S+\.\S+/;
        if (re.test(email) && email !== '') {
            document.querySelector('#email').classList.add('email-valid');
            document.querySelector('#email').classList.remove('email-invalid');
            alert('Enviado com sucesso')
            return true;
        } else {
            document.querySelector('#email').classList.add('email-invalid');
            document.querySelector('#email').classList.remove('email-valid');
            return false;
        }
    }

}


function manipularCpf_Cell(){
    numCpf.addEventListener('input', e => {
        const campo = numCpf.getAttribute('id');
        return e.target.value = formulario[campo](e.target.value)
    });
    
    numCell.addEventListener('input', e => {
        const campo = numCell.getAttribute('id');
        return e.target.value = formulario[campo](e.target.value)
    });
    
    emailInput.addEventListener('input', e => {
        e.target.value = e.target.value
    })
}

function enviarFormulario() {
    event.preventDefault()
    formulario.email(emailInput.value)

}

formulario.cpf(numCpf.value);
formulario.cell(numCell.value);
manipularCpf_Cell()