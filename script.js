// Adiciona funcionalidade para navegar entre os links de navegação com teclado
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('keydown', function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            event.preventDefault();
            window.location.href = this.href;
        }
    });
});

// Controle para aumentar/diminuir o tamanho do texto
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
const fontSizeExample = document.querySelector('.font-size-example');

increaseFontButton.addEventListener('click', function() {
    let currentSize = parseFloat(window.getComputedStyle(fontSizeExample).fontSize);
    fontSizeExample.style.fontSize = `${currentSize * 1.2}px`;
});

decreaseFontButton.addEventListener('click', function() {
    let currentSize = parseFloat(window.getComputedStyle(fontSizeExample).fontSize);
    fontSizeExample.style.fontSize = `${currentSize * 0.8}px`;
});
