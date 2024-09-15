const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');
const body = document.body;

menuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('block');
    
    body.classList.add('no-scroll');
    
    menuButton.children[0].classList.toggle('rotate-45');
    menuButton.children[1].classList.toggle('opacity-0');
    menuButton.children[2].classList.toggle('-rotate-45');
});

closeMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('block');
    mobileMenu.classList.add('hidden');
    
    body.classList.remove('no-scroll');
    
    menuButton.children[0].classList.remove('rotate-45');
    menuButton.children[1].classList.remove('opacity-0');
    menuButton.children[2].classList.remove('-rotate-45');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
        
        body.classList.remove('no-scroll');
        
        menuButton.children[0].classList.remove('rotate-45');
        menuButton.children[1].classList.remove('opacity-0');
        menuButton.children[2].classList.remove('-rotate-45');
    });
});
