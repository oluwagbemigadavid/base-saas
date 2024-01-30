const companies = [
    {
        text: 'BASE provides us with the detailed and accurate data we need”',
        logo: '/assets/pngwing.com (1).png'
    },
    {
        text: '“Tools are constantly improved and contain a lot of useful information”',
        logo: '/assets/pngwing.com (2).png'
    },
    {
        text: '"We can easily analyze our big data quickly and efficiently all the time."',
        logo: '/assets/pngwing.com.png'
    },
]

const renderCompanies = document.querySelector('.company-container');

companies.forEach((comp, i) => {
    const container  = document.createElement('div');
    const starContainer = document.createElement('div');
    const text = document.createElement('p');
    const logo = document.createElement('img');
    
    container.classList.add('company')
    starContainer.classList.add('stars')
    
    for(let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.classList.add('star')
        star.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#1C274C"/>
        </svg>`
        starContainer.appendChild(star);
    }

    text.textContent = comp.text
    logo.src = comp.logo
    
    container.appendChild(starContainer)
    container.appendChild(text)
    container.appendChild(logo)

    renderCompanies.appendChild(container)
})

const HowDoesItWork = [
    {
        title: 'Target your audience effectively',
        text: 'Nisl in enim, gravida risus enim risus non et in iaculis non facilisis eget blandit id vulputate morbi proin vitae tincidunt vestibulum viverra. Quis odio mauris velit egestas risus'
    },
    {
        title: 'Build dashboard in minutes',
        text: 'Facilisi eu neque amet, orci tellus nibh amet tincidunt nunc, feugiat arcu vulputate duis. Quis odio mauris, in sed pharetra velit egestas risus purus vel'
    },
    {
        title: 'Easily download your tables and data',
        text: 'Cursus dolor sagittis, nisi sit pharetra pharetra ornare nec diam id in in commodo mattis at retium at id nisi ullamcorper tortor augue parturient at tellus lorem enim '
    },
    {
        title: 'Access to dashboard from all devices',
        text: 'Ac pharetra pharetra morbi turpis auctor vel eget amet nulla diam facilisis sit morbi sit aliquam in amet ultrices aliquet leo facilisis  lorem proi'
    },
]

const renderHow = document.querySelector('.how-container');

HowDoesItWork.forEach((card, i) => {
    const container = document.createElement('div');
    const title = document.createElement('h3');
    const text = document.createElement('p');

    container.classList.add('how-card');

    title.textContent = card.title 
    text.textContent = card.text 

    container.appendChild(title);
    container.appendChild(text);

    renderHow.appendChild(container)
})
