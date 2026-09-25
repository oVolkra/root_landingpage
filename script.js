const boton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
const links = document.querySelectorAll('.site-header nav a');

boton.addEventListener('click', function () {
    const abierto = nav.classList.toggle('activo');
    boton.textContent = abierto ? '✕' : '☰';
    boton.setAttribute('aria-expanded', abierto);
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('activo');
        boton.textContent = '☰';
        boton.setAttribute('aria-expanded', 'false');
    });
});