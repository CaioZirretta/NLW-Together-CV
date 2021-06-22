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

/* Sombra no header */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})