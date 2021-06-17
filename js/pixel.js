// VERIFICA CLICK EM LINKS NAVBAR

const linksNavbar = document.querySelectorAll(".nav-link");

linksNavbar.forEach(item => {
    item.addEventListener('click', function() {
        fbq('trackCustom', 'ClicouLinkNavbar', {link: item.value});
    });
});

// VERIFICA CLICK BOTÃO NAVBAR
document.querySelector("#botao-chamada-navbar").addEventListener('click', fbq('trackCustom', 'ClicouFalarEspecialista'));

// VERIFICA CLICK EM BOTAO DE CHAMADA

document.querySelector("#telaInicial a").addEventListener('click', fbq('trackCustom', 'ClicouBotaoChamada'));

// VERIFICA CLICK EM ARTIGO

const linksArtigos = document.querySelectorAll(".artigo a");

linksArtigos.forEach(item => {
    item.addEventListener('click', function() {
        fbq('trackCustom', 'ClicouLinkArtigo');
    });
});

// VERIFICA CLICK EM BOTÕES DE SOLUCOES

const botoesSolucoes = document.querySelectorAll("#controle button");

botoesSolucoes.forEach(item => {
    item.addEventListener('click', function() {
        fbq('trackCustom', 'ClicouSolucoes');
    });
});


// CHEGOU NA PAGONA DE CAPTURA

var chegouCaptura = false;
function chegouPaginaCaptura(){
    if (!chegouCaptura) {
        fbq('trackCustom', 'RolouAtePaginaCaptura');
    }
    chegouCaptura = true;
}


// VERIFICA CLICK EM SUBMIT DO FORM

function disparaPixel() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(item => {
        fbq('trackCustom', 'SubmitForm', {nome: inputs[0].value, email: inputs[1].value, telefone: inputs[2].value, empresa: inputs[3].value});
    });
}

// VERIFICA CLICK EM REDE SOCIAL

const redesSociais = document.querySelectorAll("#redes-sociais a");

redesSociais.forEach(item => {
    item.addEventListener('click', function() {
        fbq('trackCustom', 'ClicouRedeSocial');
    });
});