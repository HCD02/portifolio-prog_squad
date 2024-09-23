const carrossel = document.querySelector('.carrossel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalProfiles = carrossel.children.length; // Número total de perfis

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    console.log("Botão anterior clicado"); // Log para debug
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
});

nextButton.addEventListener('click', () => {
    console.log("Botão próximo clicado"); // Log para debug
    if (currentIndex < totalProfiles - 1) {
        currentIndex++;
        updateCarrossel();
    }
});

function updateCarrossel() {
    const translateX = currentIndex * -100; // Movimentação de 100% da largura da tela
    carrossel.style.transform = `translateX(${translateX}%)`;
    console.log(`Movendo para o índice: ${currentIndex}`); // Log para debug
}
