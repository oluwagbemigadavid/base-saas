let lastScrollY = 0
let visible = false;
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if(currentScrollY > lastScrollY) {
        nav.style.opacity =  0
    } else {
        nav.style.opacity = 1
    }
    document.querySelector('.menu').classList.remove('active')
    lastScrollY = currentScrollY
})
document.querySelector('.hamburger').addEventListener('click', () => {
    visible = !visible
    console.log(visible)
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.hamburger').classList.toggle('active')
})

//register scrollTrigger 
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const selectBusiness = (index) => {

    document.querySelectorAll('.business-tabs p').forEach((cta, i) => {
        if(i === index){
            cta.classList.add('active-business-tab')
        } else {
            cta.classList.remove('active-business-tab')
        }
    })

    const classes = document.querySelector('.business-desc-container')
    
    switch(index) {
        case 0: 
            classes.style.marginLeft = '0%'
        break;

        case 1: 
            classes.style.marginLeft = '-100%'
        break;

        case 2: 
            classes.style.marginLeft = '-200%'
        break;
        
        case 3: 
            classes.style.marginLeft = '-300%'
        break;
        
        default: 
        classes.style.marginLeft = '0%'
        break;

    }
}