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

const performance = [
    {
        name: 'Marvin Smith',
        score: 23,
        src: '/assets/pngwing.com (6).png'
    },
    {
        name: 'Luther Rock',
        score: -45,
        src: '/assets/pngwing.com (6).png'
    },
    {
        name: 'Kevin Rockwell',
        score: 15,
        src: '/assets/pngwing.com (6).png'
    },
    {
        name: 'Knockus Rafeal',
        score: 65,
        src: '/assets/pngwing.com (6).png'
    },
]


const renderPerformance = document.querySelector('.performance-right');

performance.forEach((card, i) => {
    const container = document.createElement('div');
    const graph = document.createElement('div');
    const name = document.createElement('h5');
    const score = document.createElement('p');
    const image = document.createElement('img');
    graph.classList.add('performance-graph');

    container.classList.add('performance-card');
    container.classList.add(`performance-card-${i}`);

    image.src = card.src
    name.textContent = card.name
    score.textContent = card.score > 0 ? `+${card.score}%` : `${card.score}%`

    container.appendChild(image);
    container.appendChild(name);
    graph.appendChild(score);
    container.appendChild(graph);

    renderPerformance.appendChild(container)
})

const pricing = [
    {
        plan: 'Starter',
        price: 15.00,
        icon: `<svg fill="#000000" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.49 26c-.13.004-.253.057-.343.15l-.994.994c-.488.47.234 1.19.703.703l.994-.994c.324-.316.098-.853-.36-.853zm-3 0c-.13.004-.253.057-.343.15l-.994.994c-.488.47.234 1.19.703.703l.994-.994c.324-.316.087-.853-.36-.853zm0-3c-.13.004-.253.057-.343.15l-.994.994c-.488.47.234 1.19.703.703l.994-.994c.324-.316.092-.853-.36-.853zm3.01-4c-.275.004-.503.225-.5.5v.5c0 2.203 1.797 4 4 4h.5c.68 0 .64-1 0-1H10c-1.663 0-3-1.337-3-3v-.5c.003-.282-.22-.504-.5-.5zM21 5c-2.203 0-4 1.797-4 4 0 2.203 1.797 4 4 4 2.203 0 4-1.797 4-4 0-2.203-1.797-4-4-4zm0 1c1.663 0 3 1.337 3 3s-1.337 3-3 3-3-1.337-3-3 1.337-3 3-3zM27.307.023c-.818-.055-1.79.033-2.866.248-2.152.43-4.727 1.374-7.19 2.796C12.32 5.913 8.844 10.23 6.047 16.29c-.51 1.106-2.01 2.778-3.213 3.413-.602.318-1.04.354-1.29.195C1.293 19.74 1 19.228 1 18c0-1.117.48-2.977 1.145-4.486.332-.755.71-1.43 1.068-1.885.358-.457.69-.63.787-.63.264 0 .407.07.535.186.13.114.234.29.31.49.148.397.155.824.155.824-.01.676 1.01.676 1 0 0 0 .007-.573-.22-1.176-.112-.3-.287-.624-.58-.885-.294-.26-.714-.44-1.2-.44-.653 0-1.133.452-1.572 1.012-.44.56-.842 1.29-1.198 2.1C.52 14.726 0 16.616 0 18s.313 2.302 1.008 2.742c.695.44 1.54.244 2.293-.154 1.508-.795 3.01-2.484 3.653-3.88C9.693 10.77 13.02 6.665 17.75 3.935c2.367-1.367 4.86-2.277 6.887-2.682 1.013-.202 1.91-.277 2.6-.23.69.046 1.15.232 1.33.412.18.18.365.638.412 1.328.045.69-.03 1.588-.232 2.6-.405 2.028-1.315 4.52-2.682 6.888-2.73 4.73-6.836 8.056-12.775 10.797-1.394.644-3.083 2.145-3.878 3.652-.398.753-.595 1.597-.154 2.292C9.698 29.687 10.618 30 12 30c1.383 0 3.273-.52 4.89-1.23.807-.356 1.54-.76 2.098-1.198.56-.44 1.012-.92 1.012-1.572 0-.486-.18-.906-.44-1.2-.26-.293-.583-.468-.884-.58-.603-.227-1.176-.22-1.176-.22-.676-.01-.676 1.01 0 1 0 0 .427.007.824.156.2.075.376.18.49.31.115.127.186.27.186.534 0 .097-.173.43-.63.787-.455.358-1.13.736-1.884 1.068C14.976 28.52 13.116 29 12 29c-1.23 0-1.74-.293-1.898-.543-.16-.25-.123-.69.195-1.29.635-1.205 2.307-2.704 3.412-3.214 6.06-2.797 10.377-6.273 13.224-11.203 1.422-2.463 2.365-5.038 2.795-7.19.214-1.078.302-2.05.247-2.867-.056-.817-.24-1.502-.704-1.966-.464-.465-1.15-.648-1.966-.704z"></path></g></svg>`,
        features: [
            {
                available: true,
                feature: 'Lorem ipsum dolor sit.'
            },
            {
                available: true,
                feature: 'Free tooling'
            },
            {
                available: false,
                feature: 'Limited exports'
            },
            {
                available: false,
                feature: 'Full Exports.'
            },
            {
                available: false,
                feature: 'Up to 10 business'
            },
            {
                available: false,
                feature: 'GIVE ME BASE'
            },
        ]

    },
    {
        plan: 'Business',
        price: 35.00,
        icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.016,112.284c-1.225-2.957-4.109-4.884-7.309-4.884h-99.489V7.911c0-3.2-1.927-6.084-4.884-7.309 c-2.953-1.224-6.358-0.549-8.621,1.715l-56.681,56.681c-0.002,0.002-0.004,0.003-0.005,0.005 c-0.002,0.002-0.003,0.004-0.005,0.005l-53.692,53.692c-1.484,1.483-2.317,3.496-2.317,5.594v9.299 c-23.085-9.073-47.444-13.678-72.588-13.678c-109.752,0-199.042,89.29-199.042,199.042S92.671,512,202.424,512 s199.042-89.29,199.042-199.042c0-27.707-5.541-54.339-16.467-79.352h5.324c2.098,0,4.11-0.833,5.594-2.317l53.699-53.699 c0.001-0.001,0.002-0.002,0.002-0.002l56.684-56.684C508.563,118.642,509.241,115.24,508.016,112.284z M344.534,67.871 l40.862-40.862v85.025l-40.862,40.862V67.871z M290.834,139.573v-18.002h0l37.879-37.879v85.025L300.86,196.57l-9.372,9.372 c-0.218-0.182-0.436-0.365-0.655-0.545V139.573z M275.013,213.156v9.263h-0.001l-19.977,19.977 c-15.168-11.334-33.581-17.512-52.61-17.512c-48.564,0-88.074,39.51-88.074,88.074s39.51,88.074,88.074,88.074 s88.074-39.51,88.074-88.074c0-22.307-8.542-43.737-23.668-59.982l19.37-19.37h10.739c18.701,22.24,28.966,50.278,28.966,79.352 c0,68.088-55.394,123.48-123.48,123.48c-68.088,0-123.48-55.394-123.48-123.48s55.394-123.48,123.48-123.48 C228.797,189.477,253.806,197.664,275.013,213.156z M199.777,308.841c1.544,1.544,3.569,2.317,5.593,2.317 s4.049-0.772,5.593-2.317l17.787-17.787c5.107,6.107,7.953,13.791,7.953,21.903c0,18.902-15.379,34.28-34.28,34.28 c-18.903,0-34.28-15.379-34.28-34.28s15.378-34.28,34.28-34.28c4.736,0,9.306,0.955,13.539,2.79l-16.187,16.187 C196.688,300.743,196.688,305.753,199.777,308.841z M227.693,269.737c-7.637-4.465-16.389-6.881-25.269-6.881 c-27.627,0-50.102,22.475-50.102,50.102c0,27.626,22.475,50.102,50.102,50.102c27.626,0,50.102-22.476,50.102-50.102 c0-12.359-4.496-24.039-12.55-33.128l15.658-15.658c12.175,13.28,19.042,30.683,19.042,48.786 c0,39.84-32.412,72.252-72.252,72.252c-39.84,0-72.252-32.412-72.252-72.252c0-39.84,32.412-72.252,72.252-72.252 c14.83,0,29.203,4.588,41.275,13.026L227.693,269.737z M385.644,312.957c0,101.029-82.192,183.222-183.221,183.222 S19.203,413.986,19.203,312.958s82.192-183.221,183.221-183.221c25.257,0,49.65,5.029,72.588,14.956v49.425 c-21.805-13.415-46.608-20.463-72.588-20.463c-76.812,0-139.302,62.491-139.302,139.302s62.491,139.302,139.302,139.302 c76.812,0,139.302-62.491,139.302-139.302c0-28.512-8.747-56.137-24.884-79.352h50.752 C379.569,258.434,385.644,285.103,385.644,312.957z M387.047,217.784H372.5h-68.455c-0.326-0.348-0.659-0.69-0.988-1.035 l8.992-8.992l27.852-27.852h85.025L387.047,217.784z M440.747,164.085h-85.025l40.862-40.862h85.025L440.747,164.085z"></path> </g> </g> </g></svg>`,
        features: [
            {
                available: true,
                feature: 'Lorem ipsum dolor sit.'
            },
            {
                available: true,
                feature: 'Free tooling'
            },
            {
                available: true,
                feature: 'Limited exports'
            },
            {
                available: true,
                feature: 'Full Exports.'
            },
            {
                available: false,
                feature: 'Up to 10 business'
            },
            {
                available: false,
                feature: 'GIVE ME BASE'
            },
        ]

    },
    {
        plan: 'Premium',
        price: 50.00,
        icon: `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="348.374,16.937 340.828,24.483 333.205,16.858 322.456,27.607 340.828,45.98 359.123,27.684 "></polygon> </g> </g> <g> <g> <polygon points="497.765,329.505 490.219,337.052 482.595,329.427 471.846,340.177 490.219,358.549 508.514,340.255 "></polygon> </g> </g> <g> <g> <polygon points="105.611,409.62 98.066,417.166 90.441,409.542 79.692,420.291 98.066,438.663 116.359,420.369 "></polygon> </g> </g> <g> <g> <rect x="44.996" y="29.48" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -19.3233 51.5758)" width="15.201" height="39.266"></rect> </g> </g> <g> <g> <rect x="90.421" y="1.417" transform="matrix(0.9386 -0.3449 0.3449 0.9386 -1.245 35.1007)" width="15.2" height="39.265"></rect> </g> </g> <g> <g> <rect x="16.937" y="74.905" transform="matrix(0.3449 -0.9386 0.9386 0.3449 -72.6622 84.9619)" width="15.2" height="39.265"></rect> </g> </g> <g> <g> <path d="M415.626,74.021H103.286l-73.724,125.7l229.895,312.281l229.893-312.281L415.626,74.021z M466.992,191.647H348.366 l61.807-96.878L466.992,191.647z M395.682,89.222L334.5,185.117l-61.179-95.895H395.682z M320.637,191.647H198.275l61.181-95.894 L320.637,191.647z M245.591,89.222l-61.181,95.895l-61.181-95.895H245.591z M108.738,94.77l61.807,96.877H51.919L108.738,94.77z M53.684,206.848h124.793l64.252,256.793L53.684,206.848z M259.456,467.87l-65.31-261.023h130.619L259.456,467.87z M276.183,463.642l64.252-256.794h124.793L276.183,463.642z"></path> </g> </g> <g> <g> <rect x="324.325" y="310.312" transform="matrix(0.5928 -0.8053 0.8053 0.5928 -107.5189 423.1689)" width="80.794" height="15.2"></rect> </g> </g> <g> <g> <rect x="387.585" y="263.374" transform="matrix(0.5928 -0.8053 0.8053 0.5928 -55.8374 431.5111)" width="22.456" height="15.2"></rect> </g> </g> </g></svg>`,
        features: [
            {
                available: true,
                feature: 'Lorem ipsum dolor sit.'
            },
            {
                available: true,
                feature: 'Free tooling'
            },
            {
                available: true,
                feature: 'Limited exports'
            },
            {
                available: true,
                feature: 'Full Exports.'
            },
            {
                available: true,
                feature: 'Up to 10 business'
            },
            {
                available: true,
                feature: 'GIVE ME BASE'
            },
        ]

    },
]

const renderPricing = document.querySelector('.pricing-contents');

pricing.forEach((item, i) => {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerLeft = document.createElement('div');
    const headerRight = document.createElement('div');
    const list = document.createElement('ul');
    const btn = document.createElement('button');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');

    container.classList.add('sub')
    header.classList.add('sub-header');
    headerLeft.classList.add('sub-header-left');
    headerRight.classList.add('sub-header-right');

    headerLeft.innerHTML = (item.icon)
    h3.textContent = item.plan
    h1.textContent = item.price
    headerRight.appendChild(h3)
    headerRight.appendChild(h1)

    item.features.forEach((feature, i) => {
        const lii = document.createElement('li');

       
        lii.innerHTML = `<i class="fa-solid ${feature.available ? 'fa-arrow-right' : 'fa-arrow-left'}"></i> ${feature.feature}`;
    
        !feature.available && lii.classList.add('unavailable-feature');

        list.appendChild(lii);
    });
    
    
    btn.textContent = 'Get this plan now'

    header.appendChild(headerLeft);
    header.appendChild(headerRight);
    container.appendChild(header)
    container.appendChild(list)
    container.appendChild(btn)


    renderPricing.appendChild(container)
})

