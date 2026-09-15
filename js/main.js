// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// ===== Dropdown on mobile =====
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = toggle.closest('.dropdown');
      parent.classList.toggle('open');
    }
  });
});

// ===== Testimonial carousel =====
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}
if (slides.length && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  // auto-rotate
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
}

// ===== Newsletter form =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const feedback = newsletterForm.querySelector('.form-feedback');
    if (input && input.value && input.value.includes('@')) {
      feedback.innerHTML = '✅ Thanks for subscribing! Check your inbox.';
      feedback.style.color = '#2e7d32';
      input.value = '';
    } else {
      feedback.innerHTML = '⚠️ Please enter a valid email address.';
      feedback.style.color = '#c62828';
    }
  });
}

// ===== Hero chat trigger =====
const chatTrigger = document.getElementById('heroChatTrigger');
if (chatTrigger) {
  chatTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    const toggle = document.getElementById('chatbotToggle');
    if (toggle) toggle.click();
  });
}