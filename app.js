// year update
const siteYear = document.getElementById('date');

siteYear.innerHTML = new Date().getFullYear();

// menu toggle
const navToggle = document.querySelector('.menu-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
})


