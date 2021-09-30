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
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 3);
    target.forEach(function (element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animate);
        } else {
            element.classList.remove(animate);
        }
    })
}
animeScroll()

window.addEventListener('scroll', debounce(animeScroll, 10))