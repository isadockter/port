// NAVBAR interactions (mobile view w/dropdown)
const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[35%]');
    navLinks.classList.toggle('hidden');

    console.log(navLinks);
}


// TAB LINKS for skills, experience, education
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
            // console.log('yes');
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');

        }
    });
});


const hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach((el) => observer.observe(el));
