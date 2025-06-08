let botao = document.getElementById('nao');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

botao.addEventListener('mouseover', function () {
    botao.style.position = "absolute";
    botao.style.top = Math.random() * height + "px";
    botao.style.left = Math.random() * width + "px";
});

const night = document.querySelector('.night');

function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting_star');

    // Posiciona a estrela em uma posição aleatória
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 50}vh`;

    // Adiciona a estrela ao contêiner
    night.appendChild(star);

    // Remove a estrela após a animação
    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Cria estrelas cadentes a cada intervalo
setInterval(createShootingStar, 500);

function createStars() {
    for (let i = 0; i < 100; i++) { // Número de estrelas
        const star = document.createElement('div');
        star.classList.add('star');

        // Posiciona a estrela em uma posição aleatória
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Adiciona a estrela ao contêiner
        night.appendChild(star);
    }
}

// Cria as estrelas fixas
createStars();
