document.addEventListener("DOMContentLoaded", () => {
  const counterSection = document.getElementById("count");
  const numberElements = document.querySelectorAll("#count h2");
  
  function runCounters() {
    numberElements.forEach(numberEl => {
      numberEl.textContent = "0"; 
      
      const finalNumber = +numberEl.getAttribute("data-target");
      const totalTime = 2000; // مدة العد كاملة
      const updateDelay = 20; // كل كم مللي ثانية يتحدث الرقم
      const totalSteps = totalTime / updateDelay;
      const stepAmount = finalNumber / totalSteps;
      let currentNumber = 0;
      
      const counterInterval = setInterval(() => {
        currentNumber += stepAmount;
        if (currentNumber >= finalNumber) {
          clearInterval(counterInterval);
          numberEl.textContent = finalNumber;
        } else {
          numberEl.textContent = Math.floor(currentNumber);
        }
      }, updateDelay);
    });
  }
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounters();
      }
    });
  }, { threshold: 0.5 });
  
  sectionObserver.observe(counterSection);
});



let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll === 0) {
    navbar.classList.remove("scrolled-up", "scrolled-down");
    navbar.classList.add("default-color");
  } else if (currentScroll > lastScrollTop) {
    navbar.classList.remove("scrolled-up", "default-color");
    navbar.classList.add("scrolled-down");
  } else {
    navbar.classList.remove("scrolled-down", "default-color");
    navbar.classList.add("scrolled-up");
  }

  lastScrollTop = currentScroll;
});


document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.querySelector('.image-lightbox');
  const overlay = document.querySelector('.lightbox-overlay');
  const closeBtn = document.querySelector('.lightbox-close');
  const lightboxImage = document.querySelector('.lightbox-image');
  const caption = document.querySelector('.lightbox-caption');
  
  document.querySelectorAll('.pro-card').forEach(card => {
    card.addEventListener('click', function(e) {
      const img = this.querySelector('img');
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      caption.textContent = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; 
    });
  });
  
  function closeLightbox() {
    lightbox.classList.remove('active');
  }
  
  overlay.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});