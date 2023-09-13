const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nave = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nave.classList.add('active') 
    })
}

if (close) {
    close.addEventListener('click', () => {
        nave.classList.remove('active') 
    })
}