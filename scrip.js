document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.button-1 button');
    const content2 = document.querySelector('.conten-2');
    const content1Initial = document.querySelector('.conten-1');
    const nextButtonInitial = document.querySelector('.button-next');
    const button2 = document.querySelector('.button-2 button');
    const content3 = document.querySelector('.conten-3');
    content1Initial.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';

    nextButton.addEventListener('click', function () {
        const content1 = document.querySelector('.conten-1');
        if (content1.style.display !== 'none') {
            content1.style.display = 'none';
            content2.style.display = 'block';
        } else {
            content1.style.display = 'block';
            content2.style.display = 'none';
        }
    });

    nextButtonInitial.addEventListener('click', function () {
        const home = document.querySelector('.home');
        home.style.display = 'none';
        content1Initial.style.display = 'block';
        content2.style.display = 'none';
        content3.style.display = 'none';
    });

    button2.addEventListener('click', function () {
        content2.style.display = 'none';
        content3.style.display = 'block';
    });

    const backgroundMusic = document.getElementById('backgroundMusic');
    function playBackgroundMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    }
    backgroundMusic.addEventListener('ended', function () {
        playBackgroundMusic();
    });
    const lanjutButton = document.getElementById('lanjutButton');
    lanjutButton.addEventListener('click', function () {
        playBackgroundMusic();
    });
});

const images = document.querySelectorAll('.img-galery');
const modal = document.getElementById('imgModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
    });
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('birthdayCard');
  const animatedTextElement = document.getElementById('animated-text');

  if (!card) {
    console.error('Element #birthdayCard tidak ditemukan!');
    return;
  }
  if (!animatedTextElement) {
    console.error('Element #animated-text tidak ditemukan!');
    return;
  }

  let hasTyped = false;

  function animateTypingText() {
    const textToType = animatedTextElement.getAttribute('data-text') || '';
    animatedTextElement.textContent = ''; // pastikan kosong sebelum ketik
    let i = 0;
    const interval = setInterval(() => {
      animatedTextElement.textContent += textToType.charAt(i);
      i++;
      if (i >= textToType.length) clearInterval(interval);
    }, 60);
  }

  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    if (!isOpen) {
      card.classList.add('open');
      // tunggu durasi animasi cover (1s) lalu mulai mengetik
      setTimeout(() => {
        if (!hasTyped) {
          animateTypingText();
          hasTyped = true;
        }
      }, 1000);
    } else {
      // jika mau bisa ditutup lagi
      card.classList.remove('open');
      // optional: reset teks agar bisa mengetik ulang
      // animatedTextElement.textContent = '';
      // hasTyped = false;
    }
  });
});

function createFallingHearts() {
  const home = document.querySelector('.home');
  if (!home) return;

  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';

  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';

  home.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Jalankan love jatuh terus-menerus
setInterval(createFallingHearts, 400);
