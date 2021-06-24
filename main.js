/* Abre e fecha o menu ao clicar no ícone: hamburguer e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* Esconder o menu ao selecionar um item */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        link.addEventListener('click', function(){
            nav.classList.remove('show')
        })
    })
}

/* Muda a Header ao dar o Scroll */
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* Testimonials - Swiper/Carrousel */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/* ScrollReveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .text, #home .image
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `
, {interval:100})

/* Botão back to top */

function backToTop(){
    const bttButton = document.querySelector('.back-to-top')
    
    if(window.scrollY >= 1100){
        bttButton.classList.add('show')
    } else {
        bttButton.classList.remove('show')
    }
}

/* No scroll */

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})