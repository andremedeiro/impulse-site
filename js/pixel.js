// VERIFICA CLICK EM LINKS NAVBAR

const linksNavbar = document.querySelectorAll(".nav-link");
var clicouNavbar = false;

linksNavbar.forEach(item => {
    item.addEventListener('click', () => {
        if(!clicouNavbar) {
            clicouNavbar = true;
            fbq('trackCustom', 'ClicouLinkNavbar');
        }
    });
});

// VERIFICA CLICK BOTÃO NAVBAR

var clicouBotaoNavbar = false;

document.querySelector("#botao-chamada-navbar").addEventListener('click', () => {

    if(!clicouBotaoNavbar) {
        clicouBotaoNavbar = true;
        fbq('trackCustom', 'ClicouFalarEspecialista')}
    }
);

// VERIFICA CLICK EM BOTAO DE CHAMADA

var clicouBotaoChamada = false;

document.querySelector("#telaInicial a").addEventListener('click', () => {

    if(!clicouBotaoChamada) {
        clicouBotaoChamada = true;
        fbq('trackCustom', 'ClicouBotaoChamada')
    }
});

// VERIFICA CLICK EM ARTIGO

const linksArtigos = document.querySelectorAll(".artigo a");
var clicouArtigo = false;

linksArtigos.forEach(item => {
    item.addEventListener('click', () => {
        if(!clicouArtigo) {
            clicouArtigo = true;
            fbq('trackCustom', 'ClicouLinkArtigo');
        }
    });
});

// VERIFICA CLICK EM BOTÕES DE SOLUCOES

const botoesSolucoes = document.querySelectorAll("#controle button");
var clicouSolucao = false;

botoesSolucoes.forEach(item => {
    item.addEventListener('click', () => {
        if(!clicouSolucao){
            clicouSolucao = true;
            fbq('trackCustom', 'ClicouSolucoes');
        }
    });
});


// CHEGOU NA PAGONA DE CAPTURA

var chegouCaptura = false;

function chegouPaginaCaptura(){
    if (!chegouCaptura) {
        chegouCaptura = true;
        fbq('trackCustom', 'RolouAtePaginaCaptura');
    }
}


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