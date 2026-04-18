const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel-item');
const dotsContainer = document.getElementById('dots');
const total = items.length;
let currentIndex = 0;

// Crear dots
for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Ir a foto ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.querySelectorAll('.dot');

function updateCarousel() {
    items.forEach((item, i) => {
        item.className = 'carousel-item';
        let diff = i - currentIndex;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        if (diff === 0) item.classList.add('pos-center', 'active');
        else if (diff === 1) item.classList.add('pos-right-1');
        else if (diff === 2) item.classList.add('pos-right-2');
        else if (diff === 3) item.classList.add('pos-right-3');
        else if (diff === -1) item.classList.add('pos-left-1');
        else if (diff === -2) item.classList.add('pos-left-2');
        else if (diff === -3) item.classList.add('pos-left-3');
        else item.classList.add('pos-hidden');
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function goTo(i) {
    currentIndex = (i + total) % total;
    updateCarousel();
}

items.forEach((item, i) => item.addEventListener('click', () => goTo(i)));

document.getElementById('prevBtn').addEventListener('click', () => goTo(currentIndex - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(currentIndex + 1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
});

updateCarousel();

let autoplay = setInterval(() => goTo(currentIndex + 1), 5500);
carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
carousel.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(currentIndex + 1), 5500);
});