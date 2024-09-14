document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('translate-x-full');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('translate-x-full');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('translate-x-full');
    });
});
