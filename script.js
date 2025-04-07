document.getElementById('reveal-btn').addEventListener('click', () => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
});

const contador = document.getElementById("contador");
const dataInicio = new Date("2023-01-01T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.44);
    const anos = Math.floor(meses / 12);

    const rMeses = meses % 12;
    const rDias = Math.floor(dias % 30.44);
    const rHoras = horas % 24;
    const rMinutos = minutos % 60;
    const rSegundos = segundos % 60;

    contador.innerText = 
        `Compartilhando momentos há ${String(anos).padStart(2, '0')} anos ` +
        `${String(rMeses).padStart(2, '0')} meses ` +
        `${String(rDias).padStart(2, '0')} dias ` +
        `${String(rHoras).padStart(2, '0')} horas ` +
        `${String(rMinutos).padStart(2, '0')} minutos ` +
        `${String(rSegundos).padStart(2, '0')} segundos! ❤️`;
}

setInterval(atualizarContador, 1000);

const imagesContainer = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.indicator');
const totalImages = indicators.length;
let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel(index) {
    const offset = -index * 100; // Calcula o deslocamento
    imagesContainer.style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Função para avançar automaticamente
function autoScroll() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel(currentIndex);
}

// Adiciona evento de clique nos indicadores
indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.dataset.index);
        updateCarousel(currentIndex);
    });
});

// Inicia o carrossel automático
setInterval(autoScroll, 4000); // Troca a cada 4 segundos

let startX = 0;
let isDragging = false;

imagesContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

imagesContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    // Adicione um efeito visual de arrastar (opcional)
    imagesContainer.style.transform = `translateX(calc(${-currentIndex * 100}% + ${diff}px))`;
});

imagesContainer.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const diff = e.clientX - startX;

    // Determina se deve mudar para a próxima ou anterior
    if (diff > 50 && currentIndex > 0) {
        currentIndex--;
    } else if (diff < -50 && currentIndex < totalImages - 1) {
        currentIndex++;
    }

    updateCarousel(currentIndex);
});

// Suporte para dispositivos móveis
imagesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

imagesContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;

    // Adicione um efeito visual de arrastar (opcional)
    imagesContainer.style.transform = `translateX(calc(${-currentIndex * 100}% + ${diff}px))`;
});

imagesContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const diff = e.changedTouches[0].clientX - startX;

    // Determina se deve mudar para a próxima ou anterior
    if (diff > 50 && currentIndex > 0) {
        currentIndex--;
    } else if (diff < -50 && currentIndex < totalImages - 1) {
        currentIndex++;
    }

    updateCarousel(currentIndex);
});

const musicBtn = document.getElementById('music-btn');
const audio = new Audio('Music/Te Vivo - Luan Santana.mp3'); // Caminho para o arquivo de música
audio.loop = true; // Ativa o loop da música

let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = '▶ Te Vivo';
    } else {
        audio.play();
        musicBtn.textContent = '❚❚ Te Vivo';
    }
    isPlaying = !isPlaying;
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

const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
    window.location.href = 'Presente/index2.html'; 
});
