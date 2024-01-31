const star = document.querySelectorAll('.star svg path')
gsap.from(star, {
    scrollTrigger: {
        trigger: '.star',
        start: 'top 80%',
        end: '+=100',
        scrub: false,
    },
    stagger: 0.2,
    fill: '#E3E9EF',
    opacity: 0.5,
    duration: 1,
})

const list = document.querySelectorAll('.performance-left ul li')
list.forEach((char, i) => {
    const text = new SplitType(char, {types: 'chars, words'})
    gsap.from()
})