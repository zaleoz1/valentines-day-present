document.querySelectorAll('.momento-video').forEach(video => {
  video.parentElement.addEventListener('mouseenter', () => {
    video.play();
  });
  video.parentElement.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Troca automática da imagem da capa
const capaImgs = [
  "img/7 (1).jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",  

];
let capaIndex = 0;
const capaImgEl = document.querySelector('.relative.rounded-xl img');
setInterval(() => {
  capaIndex = (capaIndex + 1) % capaImgs.length;
  capaImgEl.src = capaImgs[capaIndex];
}, 4000);

// Música ao clicar no botão
document.addEventListener('DOMContentLoaded', function() {
  const btnMusica = document.getElementById('btn-musica');
  const imgMusica = btnMusica.querySelector('img');
  const audio = document.getElementById('audio-te-vivo');
  const textoMusica = document.getElementById('btn-musica-texto');
  let tocando = false;

  btnMusica.addEventListener('click', function() {
    tocando = !tocando;
    if (tocando) {
      audio.play();
      imgMusica.src = 'icones/pause.png';
      textoMusica.textContent = 'Amor Sem Medida';
    } else {
      audio.pause();
      imgMusica.src = 'icones/play.png';
      textoMusica.textContent = 'Nossa Musica';
    }
  });

  // Se a música terminar, volta o botão para play e texto padrão
  audio.addEventListener('ended', function() {
    tocando = false;
    imgMusica.src = 'icones/play.png';
    textoMusica.textContent = 'Nossa Musica';
  });
});
