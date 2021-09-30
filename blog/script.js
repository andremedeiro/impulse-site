const cta = document.querySelector("#cta");
const close = document.querySelector("#close");
const captura = document.querySelector("#telaCaptura");
const body = document.querySelector("body");
var posicao_anterior = [0, 0];

cta.addEventListener('click', () => {
    captura.classList.add("aberto");
    body.style.overflowY = 'hidden';
})

close.addEventListener('click', () => {
    captura.classList.remove("aberto");
    body.style.overflowY = 'visible';
})

// VERIFICA CLICK EM SUBMIT DO FORM

var clicouBotaoSubmit = false;

function disparaPixel() {
    const inputs = document.querySelectorAll("input");

    if(!clicouBotaoSubmit) {
        clicouBotaoSubmit = true;
        fbq('trackCustom', 'SubmitForm', {nome: inputs[0].value, email: inputs[1].value, telefone: inputs[2].value, empresa: inputs[3].value});
    }
}

// VERIFICA CLICK EM REDE SOCIAL

const redesSociais = document.querySelectorAll("#redes-sociais a");
var clicouRedeSocial = false;

redesSociais.forEach(item => {
    item.addEventListener('click', () => {
        if(!clicouRedeSocial) {
            clicouRedeSocial = true;
            fbq('trackCustom', 'ClicouRedeSocial');
        }
    });
});

var navbar = document.querySelector("#navbar.navbar-blog");

document.body.addEventListener('scroll', () => {
    if (document.body.scrollTop >= (window.innerHeight - 70)) {
        navbar.classList.remove("transparente");
        navbar.classList.add("branco")
    } else {
        navbar.classList.remove("branco");
        navbar.classList.add("transparente")
    }
})

