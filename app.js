// year update
const siteYear = document.getElementById('date');

siteYear.innerHTML = new Date().getFullYear();

// menu toggle
const navToggle = document.querySelector('.menu-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

//fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})

//scrolling links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default behaviour
        e.preventDefault();
        // navigato to specific id
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);
        // calculate heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            left:0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})
