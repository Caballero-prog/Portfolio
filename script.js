const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const navLinks = document.querySelectorAll('.navbar a');

let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  // Update navbar links
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');

  currentIndex = index;
}

// Dots click
dots.forEach(dot => {
  dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
});

// Navbar click
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSlide(parseInt(link.dataset.slide));
  });
});

// Start at first slide
showSlide(0);
