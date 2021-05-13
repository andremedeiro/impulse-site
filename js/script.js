// LINKS NAVBAR E SETA
const doc = document.documentElement;

window.addEventListener('scroll', function() {
    var linkSeta = document.querySelector("#link-seta");
    var value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));

	if (value < 14) {
        changeLink("home");
        linkSeta.href = "#telaQuemSomos";
        changeNavbar("branco");
    }

    if (value >= 14) {
        changeLink("quem-somos");
        linkSeta.href = "#telaNossoObjetivo";
        changeNavbar("branco");
    }

    if (value >= 28) {
        linkSeta.href = "#telaSolucoes";
        changeNavbar("branco");
    }

    if (value >= 38) {
        changeLink("solucoes");
        linkSeta.href = "#telaCases";
        changeNavbar("vermelho");
    }

    if (value >= 51) {
        changeLink("cases");
        linkSeta.href = "#telaDepoimentos";
        linkSeta.children[0].children[0].style.fill = "rgba(16, 24, 32, 0.3)";
        linkSeta.children[0].classList.remove("bi-chevron-compact-down");
        linkSeta.children[0].children[0].setAttribute("d","M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z");
        linkSeta.children[0].classList.add("bi-chevron-compact-up");
        changeNavbar("branco");
    }

    if (value >= 71) {
        linkSeta.href = "#telaCaptura";
        changeNavbar("branco");
    }

    if (value >= 76) {
        changeLink("todos");
        linkSeta.href = "#rodape";
        linkSeta.children[0].children[0].style.fill = "rgba(229,225,230,0.3)";
        changeNavbar("preto");
        chegouPaginaCaptura();
    }

    if (value > 85) {
        linkSeta.href = "#telaInicial";
        linkSeta.children[0].classList.remove("bi-chevron-compact-up");
        linkSeta.children[0].children[0].setAttribute("d","M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z");
        linkSeta.children[0].classList.add("bi-chevron-compact-down");
        changeNavbar("preto");
    }

    console.log(value);
});

// MUDA COR NAVBAR
function changeNavbar(classeCor){
    var navbar = document.querySelector("#navbar");
    navbar.classList.remove("branco");
    navbar.classList.remove("vermelho");
    navbar.classList.remove("preto");

    navbar.classList.add(classeCor);

    var logoNavBar = document.querySelector("#logo-navbar");
    if(classeCor == "branco"){
        logoNavBar.src = "util/img/logo-fundo-branco/logo_sem_tag.svg";
    } else if(classeCor == "preto"){
        logoNavBar.src = "util/img/logo-fundo-preto/logo_sem_tag.svg";
    } else if(classeCor == "vermelho"){
        logoNavBar.src = "util/img/logo-fundo-vermelho/logo_sem_tag.svg";
    }
}

// MUDA LINK APRESENTADO NA NAVBAR

function changeLink(id){
    var navbarLinks = document.querySelectorAll(".nav-link");

    navbarLinks.forEach(link => {
        link.classList.remove("active");
    });

    if (id != "todos"){
        var linkAtual = document.getElementById(id);
        linkAtual.classList.add("active");
    }
}

// CHANGE ICON MENU
function changeMenuIcon() {

    var botaoMenu = document.querySelector("#botao-menu");

    if(botaoMenu.classList.contains("collapsed")) {
        botaoMenu.children[0].classList.remove("bi-x");
        botaoMenu.children[0].children[0].setAttribute("d","M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z");
        botaoMenu.children[0].classList.add("bi-list");
    } else {
        botaoMenu.children[0].classList.remove("bi-list");
        botaoMenu.children[0].children[0].setAttribute("d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");
        botaoMenu.children[0].classList.add("bi-x");
    }
}

// SCROLL COM LINK

const linkItems = document.querySelectorAll(".nav-link, #telaInicial a, #logo-navbar, .navbar-brand");

linkItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClink);
});

function scrollToIdOnClink(event) {
    event.preventDefault();
    const element = event.target
    const id = element.getAttribute("href");
    const to = document.querySelector(id).offsetTop;
    
    smoothScrollTo(document.offsetTop, to, 100);
    
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

// Animação 

/**
 * Essa função é importante pois otimiza o site, visto que se a cada scroll que for dado a função animeScrool
 * for ativada, haverá um custo maior de processamento por parte do cliente.
 * 
 * @param {function} func : função que será ativada a cada intervalo de tempo
 * @param {int} wait : intervalo de tempo que a função será atualizada em ms
 * @param {boolean} immediate : Define se a função será executada no mesmo momento
 * @returns retorna uma função que será ativada de tempos em tempos.
 */
const debounce = function(func, wait, immediate) {
    let timeOut;
    return function(...args) {
        const context = this;
        const later = function() {
            timeOut = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

const target = document.querySelectorAll('[data-anime]');
const animate = 'animate';

function animeScroll () {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
    target.forEach(function (element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animate);
        } else {
            element.classList.remove(animate);
        }
        console.log(element.offsetTop)
    })
}
animeScroll()

window.addEventListener('scroll', debounce(animeScroll, 200))