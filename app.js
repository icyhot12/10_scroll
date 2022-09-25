// year update
const siteYear = document.getElementById('date');

siteYear.innerHTML = new Date().getFullYear();

// menu toggle
const navToggle = document.querySelector('.menu-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const banner = document.querySelector('.banner')

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
    banner.classList.toggle('move-down')

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

//fixed navbar

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
})


