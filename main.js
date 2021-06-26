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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
    
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
    keyboard: true,
    
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize: true
        }
    }
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
    #ideals header, #ideals .card,
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

/* Item do menu de navegação ativo quando sua respectiva seção estiver sendo mostrada */
const sections = document.querySelectorAll('main section[id]') /* todas as seções que contêm id dentro do main */

function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 2) /* Deslocamento do topo e tamanho da tela*/
    
    for(let section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

/* No scroll */

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

